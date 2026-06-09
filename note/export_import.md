# Import and Export Keywords in Angular

## What are Import and Export?

In Angular (and TypeScript), **`import`** and **`export`** are used to share code between different files and organize an application into reusable parts.

* **`export`** → makes classes, components, services, or variables available to other files.
* **`import`** → brings exported code into another file so it can be used.

---

## Export in Angular

The `export` keyword is used to expose a class, component, or function from a file.

### Example: Exporting a Component

```typescript id="ex1"
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home Component</h1>`
})
export class HomeComponent {}
```

Here, `HomeComponent` is **exported automatically** using `export class`.

---

### Example: Exporting a Service

```typescript id="ex2"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return ['John', 'Jane'];
  }
}
```

This service is exported so it can be used in other components.

---

### Example: Exporting Variables or Constants

```typescript id="ex3"
export const API_URL = 'https://api.example.com';
```

---

## Import in Angular

The `import` keyword is used to bring external code into a file.

---

### Example: Importing a Component

```typescript id="ex4"
import { HomeComponent } from './home/home.component';
```

Now `HomeComponent` can be used in routing or module configuration.

---

### Example: Importing Angular Core Features

```typescript id="ex5"
import { Component } from '@angular/core';
```

This imports the `Component` decorator from Angular core library.

---

### Example: Importing a Service into a Component

```typescript id="ex6"
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `<p>User List</p>`
})
export class UserComponent {
  constructor(private userService: UserService) {
    console.log(this.userService.getUsers());
  }
}
```

---

## Import and Export Flow

```text id="flow1"
File A (export)  --->  File B (import)
```

---

## Types of Exports in Angular

### 1. Named Export

```typescript id="n1"
export class MyClass {}
```

Imported like this:

```typescript id="n2"
import { MyClass } from './my-class';
```

---

### 2. Default Export (rare in Angular)

```typescript id="d1"
export default class MyClass {}
```

Imported like:

```typescript id="d2"
import MyClass from './my-class';
```

---

## Why Import and Export are Important?

* Helps in **modular code structure**
* Enables **code reusability**
* Improves **maintainability**
* Supports **separation of concerns**
* Essential for Angular component-based architecture

---

## Summary

* `export` → makes code available outside the file
* `import` → brings code into a file
* Angular heavily uses both to build modular applications

---

## Conclusion

Import and export are fundamental TypeScript features used in Angular to connect components, services, and modules together in a clean and structured way.
