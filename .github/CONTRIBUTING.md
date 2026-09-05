# Contributing to Community Car

Thank you for your interest in contributing to Community Car! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Requirements](#testing-requirements)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## 🤝 Code of Conduct

Please be respectful, inclusive, and professional in all interactions. We are committed to providing a welcoming environment for everyone.

## 🚀 Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/community-car.git
   cd community-car
   ```
3. **Add** upstream remote:
   ```bash
   git remote add upstream https://github.com/Mostafa-SAID7/community-car.git
   ```
4. **Create** a new branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Workflow

### Backend Setup
```bash
cd src/CommunityCar.Api
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend Setup
```bash
cd ClientApp
npm install
npm start
```

### Keep Your Branch Updated
```bash
git fetch upstream
git rebase upstream/develop
```

## 📝 Coding Standards

### C# (Backend)
- Follow [Microsoft C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- Use PascalCase for public members
- Use camelCase for private members
- Add XML documentation comments to public methods
- Max line length: 120 characters

### TypeScript/Angular (Frontend)
- Follow [Angular Style Guide](https://angular.io/guide/styleguide)
- Use camelCase for variables and functions
- Use PascalCase for classes and components
- Add JSDoc comments to public methods
- Prefer const over let, avoid var
- Use strict mode and type safety

### HTML/SCSS
- Use 2 spaces for indentation
- Use semantic HTML elements
- Follow BEM convention for CSS classes
- Use variables for colors and common values

## 🧪 Testing Requirements

### Before Submitting a PR:

#### Backend Tests
```bash
cd src/CommunityCar.Tests
dotnet test /p:CollectCoverage=true
```

#### Frontend Tests
```bash
cd ClientApp
npm run test:ci
```

- **Minimum Coverage**: 80% for new code
- **Unit Tests**: Required for all new features
- **Integration Tests**: Required for API endpoints
- **E2E Tests**: Required for critical user flows

## 📌 Commit Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, missing semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process, dependencies, or tooling
- `perf`: Code change that improves performance

### Examples
```
feat(auth): add social login with Google OAuth
fix(cars): correct rental price calculation for long-term bookings
docs(readme): update installation instructions
style(frontend): format component templates
refactor(api): simplify user service logic
test(bookings): add unit tests for booking validation
```

## 🔄 Pull Request Process

### Before Creating a PR:
1. ✅ All tests pass locally
2. ✅ Code follows style guidelines
3. ✅ No unnecessary console.log or debug code
4. ✅ Related issues are linked
5. ✅ Commits are squashed if necessary

### Creating a PR:
1. Push your branch to your fork
2. Open a PR against the `develop` branch
3. Use the PR template provided
4. Fill in all required sections
5. Link related issues

### PR Checklist:
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
- [ ] Commits follow conventional format

## 🐛 Reporting Issues

### Security Issues
Do NOT create public GitHub issues for security vulnerabilities. Email security@communitycar.com instead.

### Bug Reports
Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos if applicable
- Environment details (.NET version, Node.js version, OS, browser, etc.)

### Feature Requests
Include:
- Clear description of the feature
- Use case and why it's needed
- Proposed implementation (if any)
- Related issues or discussions

## ✅ Review Process

1. **Automated Checks**: CI/CD pipeline must pass
2. **Code Review**: Maintainers will review your code
3. **Changes Requested**: Respond to feedback and update your PR
4. **Approval**: Once approved, your PR will be merged
5. **Squash & Merge**: PRs are typically squashed before merging

## 📚 Resources

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Angular Coding Style](https://angular.io/guide/styleguide)
- [C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [Jest Testing Documentation](https://jestjs.io/)
- [xUnit Documentation](https://xunit.net/)

## ❓ Questions?

- Open an issue with the `question` label
- Start a discussion in [GitHub Discussions](../../discussions)
- Email: support@communitycar.com

## 🎉 Thank You!

Your contributions help make Community Car better for everyone!
