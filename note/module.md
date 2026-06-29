# Angular Module (NgModule) Explained

## What is an Angular Module?

Angular 8 --> Angular 14 Modules
Anular 16++ Module and Module less

- Create Module  - ng g m <module name>
- Create Component in specific module - ng g c <component path>/<component name> -m <module name>

An Angular module (also called **NgModule**) is a container that groups related parts of an application such as:

* Components
* Directives
* Pipes
* Services

It helps Angular understand how different parts of the application fit together.

---

## Why Do We Need Modules?

Angular modules are used to:

* Organize the application into logical blocks
* Manage dependencies
* Control compilation context
* Improve maintainability
* Enable lazy loading

---

## Root Module (AppModule)

Every Angular application has at least one module called:

```text id="am1"
AppModule
```

It is the **starting point of the application**.

---

## Basic Structure of a Module

```typescript id="am2"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## Key Properties of NgModule

---

## 1. declarations

Used to declare:

* Components
* Directives
* Pipes

```typescript id="am3"
declarations: [
  AppComponent,
  HomeComponent
]
```

---

## 2. imports

Used to import other modules.

```typescript id="am4"
imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule
]
```

---

## 3. providers

Used to register services for dependency injection.

```typescript id="am5"
providers: [UserService]
```

---

## 4. bootstrap

Defines the root component of the application.

```typescript id="am6"
bootstrap: [AppComponent]
```

---

## 5. exports

Used to share components, directives, or pipes to other modules.

```typescript id="am7"
exports: [SharedComponent]
```

---

## Types of Angular Modules

---

## 1. Root Module

* AppModule
* Bootstraps the application

---

## 2. Feature Modules

Used to organize features:

```text id="am8"
UserModule
ProductModule
AdminModule
```

Example:

```typescript id="am9"
@NgModule({
  declarations: [UserComponent],
  imports: [],
})
export class UserModule {}
```

---

## 3. Shared Module

Used to share common components across modules.

```typescript id="am10"
@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule {}
```

---

## 4. Core Module

Used for singleton services.

```text id="am11"
AuthService
LoggingService
```

---

## Module Structure Flow

```text id="am12"
AppModule
   ├── Feature Module (UserModule)
   ├── Feature Module (ProductModule)
   ├── SharedModule
   └── CoreModule
```

---

## Example: Full AppModule

```typescript id="am13"
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## Angular 16 Note (Important)

In Angular 16:

* Modules are still supported
* But **Standalone Components are recommended**
* You can build apps without NgModule using `standalone: true`

Example:

```typescript id="am14"
@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Home</h1>`
})
export class HomeComponent {}
```

---

## Module vs Standalone Components

| Feature    | NgModule          | Standalone       |
| ---------- | ----------------- | ---------------- |
| Structure  | Required grouping | No module needed |
| Complexity | Higher            | Simpler          |
| Angular 16 | Supported         | Recommended      |

---

## Conclusion

Angular modules (NgModules) are used to organize and structure applications into logical blocks. They manage components, services, and dependencies, making large applications scalable and maintainable. However, in Angular 16, standalone components are becoming the modern alternative.
