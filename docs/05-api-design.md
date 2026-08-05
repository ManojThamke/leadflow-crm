# API Design Document

# LeadFlow CRM

Version: 1.0

Status: Planning

Author: Manoj Thamke

Date: August 2026

---

# 1. Purpose

This document defines the REST API contract for LeadFlow CRM.

It specifies endpoints, request formats, response structures, authentication requirements, HTTP status codes, pagination, filtering, and error responses.

The API follows REST principles and returns JSON for every response.

---

# 2. API Design Principles

The API follows the following principles.

- RESTful resource naming
- Stateless communication
- JSON request and response
- Proper HTTP status codes
- Consistent response structure
- Pagination support
- Filtering support
- Secure endpoints
- Predictable error responses

# 3. Base URL

Development

/api/v1

Example

/api/v1/leads

# 4. Authentication

Protected endpoints require JWT authentication.

Authorization Header

Authorization: Bearer <token>

Public Endpoints

POST /auth/login

POST /leads/public

Protected Endpoints

Everything else.

# 5. Standard Response Format

## Success

```json
{
    "success": true,
    "message": "Lead created successfully.",
    "data": {}
}
```

---

## Error

```json
{
    "success": false,
    "message": "Validation failed.",
    "errors": []
}
```

# 6. Authentication API

## Login

POST /auth/login

Body

{
    "email": "user@example.com",
    "password": "password"
}

Success

200 OK

Returns

- JWT Token
- User Details

# 7. User API

GET /users

Get all users.

---

GET /users/:id

Get single user.

---

POST /users

Create user.

---

PATCH /users/:id

Update user.

---

DELETE /users/:id

Deactivate user.

# 8. Lead API

## Public Lead

POST /leads/public

Create a lead from public website.

---

GET /leads

Get paginated leads.

Supports

- page
- limit
- search
- status
- priority
- assignedTo

---

GET /leads/:id

Get single lead.

---

POST /leads

Create lead manually.

---

PATCH /leads/:id

Update lead.

---

DELETE /leads/:id

Delete lead.

---

PATCH /leads/:id/assign

Assign lead.

---

PATCH /leads/:id/status

Update status.

# 9. Notes API

GET /leads/:id/notes

Get notes.

---

POST /leads/:id/notes

Create note.

---

PATCH /notes/:id

Update note.

---

DELETE /notes/:id

Delete note.

# 10. Activity API

GET /leads/:id/activities

Returns complete activity timeline.

# 11. Dashboard API

GET /dashboard

Returns

- Total Leads
- New Leads
- Qualified Leads
- Won Leads
- Lost Leads
- Charts

# 12. Pagination

Query Parameters

?page=1

&limit=10

Example

/leads?page=2&limit=20

# 13. Search

Supports

search=

Example

/leads?search=Microsoft

# 14. Filtering

Supports

status=

priority=

assignedTo=

Example

/leads?status=NEW

/leads?priority=HIGH

# 15. HTTP Status Codes

200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

500 Internal Server Error

# 16. Error Handling

Every error returns

- success
- message
- errors

Validation errors include field-level messages.

Unexpected errors return a generic message without exposing internal implementation details.

# 17. API Versioning

Current Version

v1

Base URL

/api/v1

Future versions can be introduced without breaking existing clients.

