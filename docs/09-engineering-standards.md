# Engineering Standards Guide

# LeadFlow CRM

Version: 1.0

Status: Approved

Author: Manoj Thamke

Date: August 2026

---

# 1. Purpose

This document defines the engineering standards for LeadFlow CRM.

The objective is to ensure consistency, maintainability, scalability, readability, and high code quality throughout the project.

Every contributor should follow these guidelines.

---

# 2. Engineering Philosophy

The project follows these principles.

- Simplicity over cleverness
- Readability over brevity
- Explicit over implicit
- Reusability over duplication
- Security by default
- Performance where it matters
- Consistency over personal preference

---

# 3. Project Structure

The project follows a modular architecture.

```

leadflow-crm/

client/

server/

docs/

```

Each feature owns its implementation.

Example

```

modules/

auth/

users/

leads/

notes/

activities/

dashboard/

```

---

# 4. Naming Conventions

## Files

Use lowercase with dots.

Examples

```

auth.controller.js

lead.service.js

user.repository.js

note.validator.js

```

---

## Variables

Use camelCase.

Example

```javascript
const currentUser = {};
const leadStatus = "NEW";
```

---

## Classes

Use PascalCase.

```javascript
class ApiError {}
```

---

## React Components

Use PascalCase.

```

Dashboard.jsx

LeadTable.jsx

Sidebar.jsx

```

---

## Constants

Use UPPER_SNAKE_CASE.

```javascript
export const LEAD_STATUS = {};
```

---

# 5. Folder Responsibilities

## Route

Only register routes.

Never write business logic.

---

## Controller

Responsibilities

- Receive request
- Call service
- Return response

Controllers must remain thin.

---

## Service

Responsibilities

- Business rules
- Data processing
- Validation of business constraints

Services never communicate directly with Express response objects.

---

## Repository

Responsibilities

- Database operations only

Repositories never contain business rules.

---

## Model

Responsibilities

- Schema definition
- Indexes
- Relationships

---

# 6. API Standards

Every API must return a consistent structure.

Success

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

Error

```json
{
  "success": false,
  "message": "",
  "errors": []
}
```

---

# 7. Error Handling

Never repeat try-catch blocks in every controller.

Use

- Async Handler
- Global Error Middleware

Always return meaningful HTTP status codes.

---

# 8. Validation Standards

All input validation must happen before controllers.

Validation includes

- Required fields
- Email format
- Enum validation
- Data types
- Length constraints

Invalid requests should never reach business logic.

---

# 9. Authentication Standards

Authentication uses JWT.

Passwords are stored using bcrypt hashing.

Authorization is role-based.

Protected routes require valid access tokens.

---

# 10. Database Standards

Every collection should contain

- createdAt
- updatedAt

Use references instead of embedding for large relationships.

Indexes must be created for frequently queried fields.

---

# 11. Logging Standards

Important events should be logged.

Examples

- Login
- Lead Created
- Lead Updated
- Lead Deleted
- Authentication Failure

Sensitive information must never appear in logs.

---

# 12. Environment Variables

Never hardcode secrets.

Examples

- Database URI
- JWT Secret
- API URLs

Use `.env` files for configuration.

---

# 13. Git Standards

Commit messages follow Conventional Commits.

Examples

```

feat: implement lead assignment

fix: resolve JWT verification issue

docs: update API documentation

refactor: simplify authentication service

test: add lead API integration tests

chore: configure eslint

```

---

# 14. Code Style

Follow these rules.

- Use async/await
- Avoid nested callbacks
- Prefer early returns
- Keep functions focused
- Keep controllers small
- Keep services reusable
- Remove dead code
- Avoid commented code in commits

---

# 15. Documentation Standards

Every feature should update

- API documentation
- README (if required)
- Relevant design documents

Documentation should evolve with the implementation.

---

# 16. Testing Standards

Test business logic before UI behavior.

Critical modules include

- Authentication
- Authorization
- Lead Management
- Dashboard

Target

- High confidence
- Meaningful assertions
- Maintainable tests

---

# 17. Security Standards

The application must

- Validate all inputs
- Hash passwords
- Protect private routes
- Use secure HTTP headers
- Never expose stack traces in production

---

# 18. Pull Request Checklist

Before merging any feature

- Code follows architecture
- No lint errors
- Tests pass
- Documentation updated
- No secrets committed
- Commit messages follow standards

---

# 19. Definition of Done

A task is complete only if

- Implementation finished
- Tested
- Reviewed
- Documented
- Committed
- Pushed
- Ready for deployment

---

# 20. Engineering Motto

> "Build software that another engineer can understand six months later without needing you to explain it."

Every engineering decision should prioritize clarity, consistency, and maintainability.