# TurfCast — Role-Based Dashboard Structure

TurfCast uses a role-based dashboard system with three user roles:

* 👤 `USER`
* 🧑‍💼 `TURF_AUTHOR`
* 👑 `ADMIN`

---

## 👤 General USER

### Menu

* Dashboard
* My Bookings
* My Matches
* My Payment History
* Profile
* Logout

---

## 🧑‍💼 TURF_AUTHOR

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

## 👑 ADMIN

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

# Role Responsibilities

## 👤 USER

A general user can:

* View their dashboard
* Browse and book available turfs
* View their own bookings
* View their recorded matches
* View their payment history
* Manage their profile
* Logout

---

## 🧑‍💼 TURF_AUTHOR

A Turf Author can manage their assigned turf and its operations.

### Turf Management

* View and manage assigned turf information
* View bookings for the assigned turf
* Manage recorded match videos and highlights
* View customers associated with the assigned turf

### Finance

* View payments for the assigned turf
* View revenue for the assigned turf

### Personal

* View own bookings
* View own matches
* View own payment history
* Manage profile
* Logout

> **Important:** A `TURF_AUTHOR` can only access data related to their assigned turf.

---

## 👑 ADMIN

The Admin has platform-wide management access.

### Management

* Manage all turfs
* Manage all users
* Manage user roles
* Manage all bookings
* Upload and manage recorded match videos and highlights

### Finance

* View all platform payments
* View overall platform revenue

### Personal

* View own bookings
* View own matches
* View own payment history
* Manage profile
* Logout

---

# Data Access Scope

| Role                | Access Scope                                                              |
| ------------------- | ------------------------------------------------------------------------- |
| 👤 `USER`           | Own account, bookings, matches, and payment history                       |
| 🧑‍💼 `TURF_AUTHOR` | Assigned turf and its bookings, customers, matches, payments, and revenue |
| 👑 `ADMIN`          | Entire TurfCast platform                                                  |

---

# Logout

The **Logout** option is available for all roles.

When a user logs out:

1. Firebase Authentication session is signed out.
2. Frontend authentication state is cleared.
3. User is redirected to the public/login page.
4. Protected dashboard routes become inaccessible.

---

# Sidebar Overview

```text
👤 USER

Menu
├── Dashboard
├── My Bookings
├── My Matches
├── My Payment History
├── Profile
└── Logout
```

```text
🧑‍💼 TURF_AUTHOR

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
👑 ADMIN

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
