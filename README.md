# TurfCast — Role-Based Dashboard Structure

TurfCast uses a role-based dashboard system with three user roles:

* `USER`
* `TURF_AUTHOR`
* `ADMIN`

---

## General USER

### Menu

* Dashboard
* My Bookings
* My Matches
* My Payment History
* Profile
* Logout

---

## TURF_AUTHOR

### Menu

* Dashboard
* My Bookings
* My Matches
* My Payment History
* Profile
* Logout

### Turf Management

* My Turf
* Bookings
* Matches Upload
* Customers

### Finance

* Payments
* Revenue

---

## ADMIN

### Menu

* Dashboard
* My Bookings
* My Matches
* My Payment History
* Profile
* Logout

### Management

* Turfs
* Users
* Bookings
* Matches Upload

### Finance

* Payments
* Revenue

---
# Data Access Scope

| Role                | Access Scope                                                              |
| ------------------- | ------------------------------------------------------------------------- |
| `USER`           | Own account, bookings, matches, and payment history                       |
| `TURF_AUTHOR` | Assigned turf and its bookings, customers, matches, payments, and revenue |
| `ADMIN`          | Entire TurfCast platform                                                  |

---

# Sidebar Overview

```text
 USER

Menu
├── Dashboard
├── My Bookings
├── My Matches
├── My Payment History
├── Profile
└── Logout
```

```text
 TURF_AUTHOR

Menu
├── Dashboard
├── My Bookings
├── My Matches
├── My Payment History
├── Profile
└── Logout

Turf Management
├── My Turf
├── Bookings
├── Matches Upload
└── Customers

Finance
├── Payments
└── Revenue
```

```text
 ADMIN

Menu
├── Dashboard
├── My Bookings
├── My Matches
├── My Payment History
├── Profile
└── Logout

Management
├── Turfs
├── Users
├── Bookings
└── Matches Upload

Finance
├── Payments
└── Revenue
```
