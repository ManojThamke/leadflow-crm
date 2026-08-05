# Software Requirements Specification (SRS)

# LeadFlow CRM

Version: 1.0

Status: Planning

Author: Manoj Thamke

Date: August 2026

---

# 1. Introduction

This document defines the functional and non-functional requirements for LeadFlow CRM.

The purpose is to provide a clear specification that guides the design, development, testing, and deployment of the application.

---

# 2. System Overview

LeadFlow CRM is a web-based lead management platform that enables organizations to capture, manage, assign, and monitor customer leads securely.

The system provides role-based access control, lead lifecycle management, activity tracking, collaboration through notes, analytics dashboards, and REST APIs.

---

# 3. User Roles

## Visitor

Unauthenticated user.

Responsibilities

- Submit a lead using the public lead form.

---

## Member

Authenticated sales user.

Responsibilities

- View assigned leads
- Update lead status
- Add notes
- View activity history

---

## Administrator

System administrator.

Responsibilities

- Manage users
- Manage all leads
- Assign leads
- Delete leads
- Access dashboard analytics
- Configure the system

---

# 4. Functional Requirements

## Authentication

FR-001

Users shall be able to log in using email and password.

FR-002

Passwords shall be securely hashed before storage.

FR-003

Authenticated users shall receive a JWT access token.

FR-004

Unauthorized users shall not access protected resources.

---

## User Management

FR-005

Administrators shall create new users.

FR-006

Administrators shall update user details.

FR-007

Administrators shall deactivate users.

FR-008

Administrators shall assign roles.

---

## Lead Management

FR-009

Visitors shall submit new leads.

FR-010

Administrators shall create leads manually.

FR-011

Administrators shall update leads.

FR-012

Administrators shall delete leads.

FR-013

Members shall update only assigned leads.

FR-014

Leads shall support assignment to users.

FR-015

Leads shall maintain lifecycle status.

---

## Lead Notes

FR-016

Members shall add notes.

FR-017

Notes shall include timestamps.

FR-018

Each note shall record its author.

---

## Activity Tracking

FR-019

System shall automatically record activities.

Activities include

- Lead Created
- Lead Updated
- Assignment Changed
- Status Changed
- Note Added
- Lead Deleted

---

## Dashboard

FR-020

Dashboard shall display

- Total Leads
- New Leads
- Qualified Leads
- Won Leads
- Lost Leads

FR-021

Dashboard shall include charts.

---

## Search & Filtering

FR-022

Users shall search leads by

- Name
- Company
- Email

FR-023

Users shall filter by

- Status
- Priority
- Assigned User

---

## Pagination

FR-024

Lead list shall support pagination.

---

## REST API

FR-025

All APIs shall return JSON.

FR-026

HTTP status codes shall follow REST conventions.

FR-027

Input shall be validated.

---

# 5. Non-Functional Requirements

## Security

NFR-001

Passwords must be hashed.

NFR-002

Protected routes require JWT.

NFR-003

Role-based authorization shall be enforced.

NFR-004

Input validation shall prevent invalid requests.

---

## Performance

NFR-005

API response time should remain under 500 ms under normal load.

NFR-006

Pagination shall be used for large datasets.

---

## Scalability

NFR-007

Architecture shall support future modules.

NFR-008

Business logic shall remain independent of routing.

---

## Maintainability

NFR-009

Feature-based folder structure.

NFR-010

Reusable components.

NFR-011

Centralized error handling.

---

## Reliability

NFR-012

Application shall recover gracefully from server errors.

NFR-013

Meaningful error messages shall be returned.

---

## Testing

NFR-014

Core business logic shall be covered by automated tests.

---

# 6. Assumptions

- Users have internet connectivity.
- MongoDB Atlas is available.
- JWT authentication is sufficient for Version 1.
- Modern browsers are used.

---

# 7. Constraints

- JavaScript will be used.
- MongoDB is the primary database.
- Free-tier deployment platforms will be used.
- Two user roles only.

---

# 8. Acceptance Criteria

The project is accepted when

- Authentication works correctly.
- Authorization is enforced.
- CRUD operations work.
- Lead lifecycle works.
- Notes work.
- Activity tracking works.
- Dashboard displays analytics.
- Tests pass.
- APIs are documented.
- Application is deployed successfully.