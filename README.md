# 🚗 Community Car

> A modern full-stack car sharing and rental management platform built with cutting-edge technologies.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![.NET](https://img.shields.io/badge/.NET-9-blue)](https://dotnet.microsoft.com/)
[![Angular](https://img.shields.io/badge/Angular-19-red)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)

---

## 📋 Overview

Community Car is a comprehensive car sharing platform that connects users with available vehicles. The application features a robust backend API and a modern, responsive frontend interface.

| Component | Technology | Version |
|-----------|-----------|---------|
| **Backend API** | ASP.NET Core | 9 |
| **Frontend** | Angular | 19 |
| **Database** | SQL Server | Latest |
| **Authentication** | JWT + Refresh Tokens | - |

---

## ✨ Key Features

### 🔐 Backend (ASP.NET Core)
- ✅ JWT Authentication with refresh token rotation
- ✅ Role-based access control (RBAC)
- ✅ OTP verification for added security
- ✅ Social login integration (OAuth)
- ✅ Comprehensive audit logging
- ✅ Rate limiting protection
- ✅ Security headers enforcement
- ✅ Email notification services

### 🎨 Frontend (Angular 19)
- ✅ Modern responsive design
- ✅ Material Design UI components
- ✅ Code splitting & lazy loading
- ✅ Advanced reactive forms
- ✅ HTTP interceptors & error handling
- ✅ Route protection with guards
- ✅ Real-time notifications
- ✅ Dark mode support

---

## 🛠️ Tech Stack

### Backend
```
ASP.NET Core 9 | Entity Framework Core | SQL Server
AutoMapper | FluentValidation | Serilog | JWT Bearer
```

### Frontend
```
Angular 19 | Angular Material | RxJS | TypeScript | SCSS | Tailwind CSS
```

---

## 🚀 Quick Start

### Prerequisites
```bash
✓ .NET 9 SDK
✓ Node.js 18+
✓ SQL Server 2019+
✓ npm or yarn package manager
```

### Backend Setup
```bash
# 1. Navigate to backend directory
cd src/CommunityCar.Api

# 2. Configure database connection
# Edit appsettings.json with your SQL Server connection string

# 3. Apply migrations
dotnet ef database update

# 4. Start the development server
dotnet run
# API runs on: https://localhost:5001
```

### Frontend Setup
```bash
# 1. Navigate to frontend directory
cd ClientApp

# 2. Install dependencies
npm install

# 3. Start development server
npm start
# App runs on: http://localhost:4200

# 4. Build for production
npm run build:prod
```

---

## 📡 API Documentation

### Authentication Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/login` | User login with credentials |
| `POST` | `/api/auth/register` | Create new user account |
| `POST` | `/api/auth/refresh` | Refresh access token |
| `POST` | `/api/auth/forgot-password` | Request password reset |
| `POST` | `/api/auth/reset-password` | Complete password reset |

### User Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/profile` | Get current user profile |
| `PUT` | `/api/profile` | Update user profile information |
| `GET` | `/api/profile/history` | Get user booking history |

---

## 🧪 Testing

### Backend Tests
```bash
cd src/CommunityCar.Tests
dotnet test                    # Run all tests
dotnet test --filter "Category=Unit"  # Run specific tests
dotnet test /p:CollectCoverage=true   # With coverage report
```

### Frontend Tests
```bash
cd ClientApp

# Headless (CI/CD)
npm run test:ci

# Interactive watch mode
npm test

# With coverage report
npm run test:coverage
```

---

## 💻 Development Workflow

### Code Standards
- **Backend**: Follow [C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- **Frontend**: Follow [Angular Style Guide](https://angular.io/guide/styleguide)
- **Commits**: Use conventional commit messages (`feat:`, `fix:`, `docs:`, etc.)
- **Testing**: Aim for >80% code coverage

### Branch Strategy
```
main (production) ← release branches ← develop ← feature/fix branches
```

- `main` → Production-ready, tagged releases
- `develop` → Integration branch for next release
- `feature/*` → New features
- `fix/*` → Bug fixes
- `docs/*` → Documentation updates

---

## 📦 Deployment

### Production Build - Backend
```bash
dotnet publish -c Release -o ./publish
# Output: ./publish folder with all assets
```

### Production Build - Frontend
```bash
npm run build:prod
# Output: ./dist/ClientApp (ready for CDN/static hosting)
```

### Docker Support
```bash
# Coming soon: Docker containerization
docker build -t community-car:latest .
docker run -p 5001:5001 community-car:latest
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes and commit: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request with detailed description

### Pull Request Guidelines
- Include description of changes
- Link related issues
- Add/update tests as needed
- Update documentation if required
- Follow code style guidelines

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Support & Contact

- 📬 Email: support@communitycar.com
- 🐛 Issues: [GitHub Issues](../../issues)
- 💬 Discussions: [GitHub Discussions](../../discussions)
- 📖 Documentation: [Wiki](../../wiki)

---

<div align="center">

**Built with ❤️ by the Community Car Team**

[⬆ Back to Top](#-community-car)

</div>
