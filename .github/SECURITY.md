# Security Policy

## 🔒 Reporting a Vulnerability

**Do NOT** create a public GitHub issue for security vulnerabilities.

### Reporting Process
1. Email: **security@communitycar.com**
2. Include:
   - Description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact
   - Any suggested fixes

3. Response time: We aim to respond within **48 hours**

### What to Expect
- Acknowledgment of your report within 48 hours
- Status updates every 7 days
- Credit in the security advisory (unless you request otherwise)
- Coordinated disclosure timeline

## ✅ Supported Versions

| Version | Supported          |
|---------|-------------------|
| 1.x     | ✅ Yes             |
| < 1.0   | ❌ No              |

## 🛡️ Security Best Practices

### For Users
- Keep your .NET and Node.js versions updated
- Use HTTPS for all API communications
- Store credentials securely
- Enable two-factor authentication where available
- Regularly update dependencies

### For Developers
- Follow OWASP guidelines
- Sanitize user inputs
- Use parameterized queries (no SQL injection)
- Implement proper authentication and authorization
- Keep dependencies updated
- Run security scans regularly
- Use environment variables for secrets (never commit secrets)

## 🔍 Security Measures

### Backend Security
- ✅ JWT authentication with secure token handling
- ✅ CSRF protection
- ✅ SQL injection prevention (EF Core parameterization)
- ✅ XSS protection
- ✅ CORS policies
- ✅ Rate limiting
- ✅ Request validation
- ✅ Secure password hashing (bcrypt)
- ✅ Audit logging

### Frontend Security
- ✅ Content Security Policy (CSP)
- ✅ HTTPS enforcement
- ✅ XSS protection
- ✅ CORS compliance
- ✅ Secure storage (no localStorage for sensitive data)
- ✅ Input validation
- ✅ Output encoding

## 📦 Dependency Management

- Regular dependency scanning with Dependabot
- Automated security patches
- Manual review of major updates
- Vulnerability notifications enabled

## 🔐 API Security

### Authentication
- JWT tokens with 15-minute expiration
- Refresh tokens with 7-day expiration
- Secure token storage (HttpOnly cookies)

### Authorization
- Role-based access control (RBAC)
- Resource-level authorization
- Principle of least privilege

### Rate Limiting
- 100 requests per minute (unauthenticated)
- 1000 requests per minute (authenticated)

## 📋 Security Headers

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security: max-age=31536000
- Content-Security-Policy: Configured per route

## 🚨 Security Contacts

- **Security Email**: security@communitycar.com
- **GitHub Issues**: For non-sensitive issues only

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [ASP.NET Core Security](https://docs.microsoft.com/en-us/aspnet/core/security/)
- [Angular Security](https://angular.io/guide/security)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

---

Last Updated: September 2026
