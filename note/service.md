# Angular Services - Complete Guide

# 1. What is an Angular Service?

An Angular Service is a TypeScript class used to store and manage:

* Business logic
* Data access logic
* API calls
* Shared data
* Utility functions

Services help keep components clean by moving reusable logic into a separate class.

---

# Why Use Services?

Without Services:

```text
Component
 ├── UI Logic
 ├── API Calls
 ├── Business Logic
 └── Data Processing
```

The component becomes large and difficult to maintain.

With Services:

```text
Component
 └── UI Logic

Service
 ├── API Calls
 ├── Business Logic
 └── Data Processing
```

This follows the Separation of Concerns principle.

---

# 2. Creating a Service

Generate a service using Angular CLI:

```bash
ng generate service services/user
```

or

```bash
ng g s services/user
```

Generated files:

```text
user.service.ts
user.service.spec.ts
```

---

# 3. Basic Service Example

## user.service.ts

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getMessage(): string {
    return 'Hello from User Service';
  }

}
```

---

# 4. Using a Service in a Component

## app.component.ts

```typescript
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  message = '';

  constructor(
    private userService: UserService
  ) {
    this.message = this.userService.getMessage();
  }

}
```

---

## app.component.html

```html
<h1>{{ message }}</h1>
```

Output:

```text
Hello from User Service
```

---

# 5. What is @Injectable?

The `@Injectable()` decorator tells Angular that this class can participate in Dependency Injection.

```typescript
@Injectable({
  providedIn: 'root'
})
```

---

# 6. Dependency Injection (DI)

Dependency Injection allows Angular to automatically create and provide service instances.

## Example

```typescript
constructor(
  private userService: UserService
) {}
```

Angular automatically creates:

```typescript
new UserService()
```

behind the scenes.

---

# 7. Service Lifecycle

When using:

```typescript
providedIn: 'root'
```

Angular creates only one instance of the service.

```text
Application Starts
        ↓
Create Service Instance
        ↓
Reuse Same Instance
        ↓
Application Ends
```

This is called a Singleton Service.

---

# 8. Sharing Data Between Components

## user.service.ts

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username = 'Supul';

}
```

---

## Component A

```typescript
constructor(
  public userService: UserService
) {}
```

```html
<p>{{ userService.username }}</p>
```

---

## Component B

```typescript
constructor(
  public userService: UserService
) {}
```

```html
<p>{{ userService.username }}</p>
```

Both components access the same data.

---

# 9. Service for API Calls

Angular services are commonly used to communicate with REST APIs.

---

## Import HttpClientModule

### app.module.ts

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class AppModule {}
```

---

## user.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

}
```

---

## Component

```typescript
users: any[] = [];

constructor(
  private userService: UserService
) {}

ngOnInit() {

  this.userService
      .getUsers()
      .subscribe(data => {

        this.users = data as any[];

      });

}
```

---

# 10. Service with Observable

Angular commonly uses RxJS Observables.

---

## user.service.ts

```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Observable<any[]> {

    return of([
      { id: 1, name: 'Supul' },
      { id: 2, name: 'John' }
    ]);

  }

}
```

---

## Component

```typescript
this.userService
    .getUsers()
    .subscribe(users => {

      console.log(users);

    });
```

---

# 11. Service with BehaviorSubject

Used for sharing real-time data between components.

---

## user.service.ts

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usernameSource =
    new BehaviorSubject<string>('Guest');

  username$ =
    this.usernameSource.asObservable();

  updateUsername(name: string) {

    this.usernameSource.next(name);

  }

}
```

---

## Component A

```typescript
this.userService
    .updateUsername('Supul');
```

---

## Component B

```typescript
this.userService
    .username$
    .subscribe(name => {

      console.log(name);

    });
```

---

# 12. Service Provider Scopes

---

## Root Level

```typescript
@Injectable({
  providedIn: 'root'
})
```

Single instance throughout the application.

---

## Module Level

```typescript
@NgModule({
  providers: [UserService]
})
```

One instance per module.

---

## Component Level

```typescript
@Component({
  providers: [UserService]
})
```

New instance for each component.

---

# 13. Real-World Example

## Employee Management System

### EmployeeService

```typescript
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) {}

  getEmployees() {
    return this.http.get('/api/employees');
  }

  getEmployee(id: number) {
    return this.http.get(
      `/api/employees/${id}`
    );
  }

  addEmployee(employee: any) {
    return this.http.post(
      '/api/employees',
      employee
    );
  }

}
```

---

## Employee Component

```typescript
constructor(
  private employeeService:
  EmployeeService
) {}

ngOnInit() {

  this.employeeService
      .getEmployees()
      .subscribe(data => {

        console.log(data);

      });

}
```

---

# 14. Service Best Practices

### Good Practices

* Keep business logic inside services
* Use services for API communication
* Use Observables for async data
* Use Dependency Injection
* Create feature-specific services
* Use interfaces for data models

### Avoid

* Writing API calls directly in components
* Storing large business logic in components
* Creating duplicate services

---

# 15. Common Angular Service Commands

Create Service:

```bash
ng g s user
```

Create Service in Folder:

```bash
ng g s services/user
```

Skip Test File:

```bash
ng g s user --skip-tests
```

---

# 16. Service vs Component

| Service                 | Component         |
| ----------------------- | ----------------- |
| Contains business logic | Contains UI logic |
| Reusable                | Represents UI     |
| Shared across app       | Specific to view  |
| Handles API calls       | Displays data     |

---

# 17. Interview Questions

### What is an Angular Service?

A class used to store reusable business logic, API calls, and shared data.

### What is Dependency Injection?

A design pattern where Angular automatically provides dependencies to classes.

### What is @Injectable?

A decorator that marks a class as available for Dependency Injection.

### Why use Services?

To separate business logic from UI logic and improve code reusability.

### What is a Singleton Service?

A service with only one instance throughout the application.

### What is BehaviorSubject?

An RxJS subject that stores and emits the latest value to subscribers.

---

# Angular Service Architecture

```text
Component
     ↓
Service
     ↓
HttpClient
     ↓
REST API
     ↓
Database
```

---

# Conclusion

Angular Services are one of the most important building blocks of Angular applications. They help organize business logic, communicate with APIs, share data between components, and support Dependency Injection. Proper use of services results in clean, maintainable, and scalable applications.
