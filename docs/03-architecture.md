# Software Architecture Document (SAD)

# LeadFlow CRM

Version: 1.0

Status: Planning

Author: Manoj Thamke

Date: August 2026

---

# 1. Purpose

This document defines the software architecture for LeadFlow CRM.

It describes the architectural decisions, module organization, request flow, design principles, and engineering standards that guide the implementation of the application.

The primary goal is to create a scalable, maintainable, secure, and production-ready application.

---

# 2. Architectural Goals

The architecture has been designed with the following goals:

- Scalability
- Maintainability
- Readability
- Testability
- Security
- Separation of Concerns
- Feature Isolation
- Production Readiness

Every architectural decision in this document supports one or more of these goals.

---
# 3. Architecture Decision Records (ADR)

## ADR-001

Decision

Use Modular MVC Architecture.

Status

Accepted

Reason

The application contains multiple independent business domains such as Authentication, Users, Leads, Notes, Activities, and Dashboard.

Keeping every feature inside its own module improves maintainability and reduces coupling.

---

## ADR-002

Decision

Use a Service Layer.

Status

Accepted

Reason

Controllers should only coordinate requests and responses.

Business rules belong inside services.

This improves readability, testing, and reuse.

---

## ADR-003

Decision

Use Repository Pattern.

Status

Accepted

Reason

Database operations should remain isolated from business logic.

Repositories provide a single point of communication with MongoDB.

This makes the application easier to maintain and test.

---

## ADR-004

Decision

Use REST API.

Status

Accepted

Reason

REST is widely supported, simple to consume, and suitable for the requirements of LeadFlow CRM.

---

## ADR-005

Decision

Use JWT Authentication.

Status

Accepted

Reason

JWT provides stateless authentication suitable for modern web applications.

---

## ADR-006

Decision

Use MongoDB.

Status

Accepted

Reason

Lead information contains flexible business data that benefits from MongoDB's document model.

# 4. Architecture Overview

LeadFlow CRM follows a **Modular MVC Architecture** enhanced with a **Service Layer** and **Repository Pattern**.

The application is organized into independent feature modules such as Authentication, Users, Leads, Notes, Activities, and Dashboard.

Each module encapsulates its own routes, controllers, services, repositories, models, and validators.

This architecture provides:

- High cohesion within modules
- Low coupling between modules
- Clear separation of concerns
- Easy scalability
- Better maintainability
- Improved testability

The application follows a layered request flow where each layer has a single responsibility.

# 5. High-Level Architecture

```mermaid
flowchart TD

A[Client Browser]

A --> B[React Frontend]

B --> C[REST API]

C --> D[Express Server]

D --> E[Authentication Middleware]

E --> F[Route]

F --> G[Controller]

G --> H[Service]

H --> I[Repository]

I --> J[(MongoDB Atlas)]

J --> I

I --> H

H --> G

G --> B
```

# 6. Layered Architecture

LeadFlow CRM is divided into independent layers.

Each layer has a clearly defined responsibility.

| Layer | Responsibility |
|---------|----------------|
| Client | User Interface |
| Routes | Endpoint Mapping |
| Controllers | Handle HTTP Request & Response |
| Services | Business Logic |
| Repositories | Database Communication |
| Models | MongoDB Schema Definitions |
| Database | Persistent Data Storage |

Business logic never directly communicates with the database.

All database operations are performed through repositories.

# 7. Layer Responsibilities

## Route Layer

Responsibilities

- Register endpoints
- Attach middleware
- Forward requests to controllers

Routes must not contain business logic.

---

## Controller Layer

Responsibilities

- Receive HTTP requests
- Validate request context
- Call services
- Return HTTP responses

Controllers remain thin.

---

## Service Layer

Responsibilities

- Execute business rules
- Coordinate repositories
- Perform calculations
- Enforce business constraints

Services never communicate directly with HTTP objects.

---

## Repository Layer

Responsibilities

- Execute MongoDB queries
- Abstract data access
- Return domain objects

Repositories never contain business logic.

---

## Model Layer

Responsibilities

- Define MongoDB schema
- Configure indexes
- Define relationships

# 8. Request Lifecycle

A request follows the sequence below.

```mermaid
sequenceDiagram

participant User

participant React

participant API

participant Controller

participant Service

participant Repository

participant MongoDB

User->>React: Submit Request

React->>API: HTTP Request

API->>Controller: Route Request

Controller->>Service: Execute Business Logic

Service->>Repository: Database Operation

Repository->>MongoDB: Query

MongoDB-->>Repository: Result

Repository-->>Service: Data

Service-->>Controller: Response

Controller-->>React: JSON Response

React-->>User: Render UI
```

