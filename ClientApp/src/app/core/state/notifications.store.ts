import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, tap, switchMap, catchError, EMPTY } from 'rxjs';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';

export interface NotificationsState {
  notifications: Notification[];
  unreadCount: number;
  loading: boolean;
  error: string | null;
}

const initialState: NotificationsState = {
  notifications: [],
  unreadCount: 0,
  loading: false,
  error: null
};

@Injectable({
  providedIn: 'root'
})
export class NotificationsStore extends ComponentStore<NotificationsState> {
  private notificationService = inject(NotificationService);

  constructor() {
    super(initialState);
  }

  // Selectors
  readonly notifications$ = this.select(state => state.notifications);
  readonly unreadCount$ = this.select(state => state.unreadCount);
  readonly loading$ = this.select(state => state.loading);
  readonly error$ = this.select(state => state.error);

  // Effects
  readonly loadNotifications = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true, error: null })),
      switchMap(() => this.notificationService.getNotifications().pipe(
        tap({
          next: (notifications) => {
            this.patchState({
              notifications: notifications,
              unreadCount: notifications.filter(n => !n.isRead).length,
              loading: false
            });
          },
          error: (error) => {
            this.patchState({ error: error.message, loading: false });
          }
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  readonly markAsRead = this.effect<string>(notificationId$ =>
    notificationId$.pipe(
      switchMap((id) => this.notificationService.markAsRead(id).pipe(
        tap({
          next: () => {
            this.updateNotificationReadStatus({ notificationId: id, isRead: true });
          },
          error: (error) => {
            this.patchState({ error: error.message });
          }
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  readonly markAllAsRead = this.effect<void>(trigger$ =>
    trigger$.pipe(
      switchMap(() => this.notificationService.markAllAsRead().pipe(
        tap({
          next: () => {
            this.markAllNotificationsAsRead();
          },
          error: (error) => {
            this.patchState({ error: error.message });
          }
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  readonly addNotification = this.effect<Notification>(notification$ =>
    notification$.pipe(
      tap(notification => {
        this.addNotificationToState(notification);
      })
    )
  );

  // Updaters
  private readonly updateNotificationReadStatus = this.updater(
    (state, { notificationId, isRead }: { notificationId: string, isRead: boolean }) => {
      const notifications = state.notifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, isRead }
          : notification
      );
      const unreadCount = notifications.filter(n => !n.isRead).length;
      return { ...state, notifications, unreadCount };
    }
  );

  private readonly markAllNotificationsAsRead = this.updater(state => {
    const notifications = state.notifications.map(notification => ({
      ...notification,
      isRead: true
    }));
    return { ...state, notifications, unreadCount: 0 };
  });

  private readonly addNotificationToState = this.updater((state, notification: Notification) => {
    const notifications = [notification, ...state.notifications];
    const unreadCount = notifications.filter(n => !n.isRead).length;
    return { ...state, notifications, unreadCount };
  });

  // Methods
  getUnreadCount(): number {
    return this.get().unreadCount;
  }

  getNotifications(): Notification[] {
    return this.get().notifications;
  }
}