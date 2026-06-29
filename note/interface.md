# Angular Interfaces - Complete Guide

# 1. What is an Interface?

An Interface is a TypeScript feature used to define the structure (shape) of an object.

Interfaces help developers:

* Define data models
* Improve type safety
* Reduce coding errors
* Improve code readability
* Provide IntelliSense support

Since Angular is built using TypeScript, interfaces are widely used in Angular applications.

---

# Why Use Interfaces?

Without Interface:

```typescript
user: any = {
  id: 1,
  name: 'Supul',
  email: 'supul@gmail.com'
};
```

Problems:

* No type checking
* Easy to make mistakes
* No IntelliSense support

---

With Interface:

```typescript
user: User = {
  id: 1,
  name: 'Supul',
  email: 'supul@gmail.com'
};
```

Benefits:

* Strong typing
* Better code completion
* Compile-time validation

---

# 2. Creating an Interface

## user.interface.ts

```typescript
export interface User {

  id: number;

  name: string;

  email: string;

}
```

---

# 3. Using an Interface

```typescript
import { User } from './user.interface';

const user: User = {

  id: 1,
  name: 'Supul',
  email: 'supul@gmail.com'

};
```

---

# 4. Generate Interface Using Angular CLI

```bash
ng generate interface models/user
```

or

```bash
ng g i models/user
```

Generated file:

```text
src/app/models/user.ts
```

---

# 5. Interface with Optional Properties

Use `?` for optional fields.

```typescript
export interface User {

  id: number;

  name: string;

  email?: string;

}
```

Valid:

```typescript
const user: User = {

  id: 1,
  name: 'Supul'

};
```

---

# 6. Readonly Properties

Prevent modification.

```typescript
export interface User {

  readonly id: number;

  name: string;

}
```

Example:

```typescript
user.id = 10;
```

Produces:

```text
Cannot assign to 'id'
```

---

# 7. Interface with Methods

Interfaces can define methods.

```typescript
export interface Employee {

  id: number;

  name: string;

  calculateSalary(): number;

}
```

---

# 8. Interface with Arrays

```typescript
export interface Product {

  id: number;

  name: string;

}
```

```typescript
products: Product[] = [
  {
    id: 1,
    name: 'Laptop'
  },
  {
    id: 2,
    name: 'Mobile'
  }
];
```

---

# 9. Nested Interfaces

```typescript
export interface Address {

  city: string;

  country: string;

}
```

```typescript
export interface User {

  id: number;

  name: string;

  address: Address;

}
```

---

## Example

```typescript
const user: User = {

  id: 1,

  name: 'Supul',

  address: {

    city: 'Sydney',

    country: 'Australia'

  }

};
```

---

# 10. Interface in Components

## user.interface.ts

```typescript
export interface User {

  id: number;

  name: string;

}
```

---

## app.component.ts

```typescript
import { User } from './models/user';

export class AppComponent {

  users: User[] = [

    {
      id: 1,
      name: 'Supul'
    },

    {
      id: 2,
      name: 'John'
    }

  ];

}
```

---

## app.component.html

```html
<ul>

  <li *ngFor="let user of users">

    {{ user.name }}

  </li>

</ul>
```

---

# 11. Interface in Services

Most commonly used with API responses.

---

## user.interface.ts

```typescript
export interface User {

  id: number;

  name: string;

  email: string;

}
```

---

## user.service.ts

```typescript
import { HttpClient }
from '@angular/common/http';

import { Observable }
from 'rxjs';

import { User }
from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(
      '/api/users'
    );

  }

}
```

---

# 12. Interface with API Response

Real-world API responses often contain metadata.

---

API Response:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Supul"
    }
  ]
}
```

---

Interface:

```typescript
export interface User {

  id: number;

  name: string;

}
```

```typescript
export interface ApiResponse {

  success: boolean;

  data: User[];

}
```

---

Usage:

```typescript
this.http
    .get<ApiResponse>('/api/users');
```

---

# 13. Interface Inheritance

Interfaces can extend other interfaces.

```typescript
export interface Person {

  id: number;

  name: string;

}
```

```typescript
export interface Employee
extends Person {

  department: string;

}
```

---

Example:

```typescript
const employee: Employee = {

  id: 1,

  name: 'Supul',

  department: 'IT'

};
```

---

# 14. Multiple Interface Inheritance

```typescript
interface Address {

  city: string;

}
```

```typescript
interface Contact {

  phone: string;

}
```

```typescript
interface Employee
extends Address, Contact {

  name: string;

}
```

---

# 15. Interface vs Class

## Interface

```typescript
interface User {

  id: number;

  name: string;

}
```

Only defines structure.

---

## Class

```typescript
class User {

  id: number = 0;

  name: string = '';

}
```

Can contain implementation and logic.

---

## Comparison

| Interface         | Class                        |
| ----------------- | ---------------------------- |
| Defines structure | Defines structure + behavior |
| No implementation | Has implementation           |
| Compile-time only | Runtime object               |
| Lightweight       | Heavier                      |

---

# 16. Real-World Angular Project Structure

```text
src/
│
├── models/
│   ├── user.interface.ts
│   ├── product.interface.ts
│   └── employee.interface.ts
│
├── services/
│
├── components/
│
└── pages/
```

---

# 17. Best Practices

### Good Practices

* Create interfaces for all API models
* Use interfaces instead of `any`
* Store interfaces in a `models` folder
* Use meaningful names
* Use inheritance when needed

---

### Avoid

```typescript
users: any[];
```

Instead:

```typescript
users: User[];
```

---

# 18. Real-World Example

Employee Management System

## employee.interface.ts

```typescript
export interface Employee {

  id: number;

  firstName: string;

  lastName: string;

  email: string;

  department: string;

  salary: number;

}
```

---

## employee.service.ts

```typescript
getEmployees():
Observable<Employee[]> {

  return this.http.get<Employee[]>(
    '/api/employees'
  );

}
```

---

## employee.component.ts

```typescript
employees: Employee[] = [];

ngOnInit() {

  this.employeeService
      .getEmployees()
      .subscribe(data => {

        this.employees = data;

      });

}
```

---

# 19. Interview Questions

### What is an Interface?

A TypeScript construct that defines the shape of an object.

### Why use Interfaces in Angular?

To provide type safety and define data models.

### Difference Between Interface and Class?

Interface defines structure only, while a class can contain both structure and implementation.

### Can Interfaces Extend Other Interfaces?

Yes.

```typescript
interface Employee extends Person {}
```

### Can Interfaces Have Methods?

Yes.

```typescript
interface User {

  login(): void;

}
```

---

# Interface Workflow

```text
API Response
      ↓
Interface
      ↓
Service
      ↓
Component
      ↓
Template
```

---

# Conclusion

Interfaces are one of the most important TypeScript features used in Angular applications. They define the structure of data, improve type safety, enhance code readability, and make API integration more reliable. In professional Angular applications, interfaces are commonly used for models, API responses, forms, and shared data structures.
