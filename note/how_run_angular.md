# How Angular Works Internally (Step-by-Step)

## Overview

Angular is a **component-based framework** that works by combining **TypeScript, templates, dependency injection, and change detection** to build dynamic Single Page Applications (SPA).

This document explains how Angular works internally when a user opens a website.

---

## Step 1: Browser Loads Angular App

When you open an Angular website:

1. The browser loads `index.html`
2. This file contains:

```html id="a1"
<app-root></app-root>
```

3. Angular replaces `<app-root>` with the root component.

---

## Step 2: Main Entry File Executes

Angular starts from:

```typescript id="a2"
main.ts
```

Example:

```typescript id="a3"
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent);
```

### What happens here:

* Angular initializes the application
* Loads root component
* Starts dependency injection system

---

## Step 3: Component Tree is Created

Angular builds a **component tree** starting from root:

```
AppComponent
   ├── HeaderComponent
   ├── SidebarComponent
   └── HomeComponent
```

Each component has:

* HTML template
* TypeScript logic
* CSS styles

---

## Step 4: Template Rendering

Angular converts component templates into DOM elements.

Example:

```html id="a4"
<h1>{{ title }}</h1>
```

Angular processes:

* `{{ title }}` → replaced with data from component

---

## Step 5: Data Binding Starts

Angular connects component data with the UI using **data binding**.

### Types:

* Interpolation `{{ }}`
* Property binding `[value]`
* Event binding `(click)`
* Two-way binding `[(ngModel)]`

Example:

```html id="a5"
<button (click)="count = count + 1">
  Clicked {{ count }} times
</button>
```

---

## Step 6: Dependency Injection (DI)

Angular creates and injects services automatically.

Example:

```typescript id="a6"
constructor(private userService: UserService) {}
```

### What happens internally:

* Angular checks injector container
* Creates service instance (if not already created)
* Injects into component

---

## Step 7: Change Detection Cycle

Angular continuously checks for changes in data.

### How it works:

1. User clicks button / API response arrives
2. Angular detects event
3. Runs **change detection**
4. Updates only changed DOM parts

Example:

```typescript id="a7"
this.title = 'Updated Title';
```

Angular automatically updates UI.

---

## Step 8: Zone.js Triggers Updates

Angular uses **Zone.js** to detect async operations:

* Click events
* HTTP requests
* Timers (setTimeout)

When any async event finishes:
👉 Angular runs change detection automatically

---

## Step 9: Routing (SPA Navigation)

When user navigates:

```
/home → /about
```

Angular:

1. Prevents full page reload
2. Updates URL
3. Loads new component
4. Reuses existing layout

Example:

```typescript id="a8"
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```

---

## Step 10: HTTP Requests (Backend Communication)

Angular uses `HttpClient` to communicate with APIs.

Example:

```typescript id="a9"
this.http.get('/api/users').subscribe(data => {
  this.users = data;
});
```

Flow:

1. Request sent to backend
2. Response received
3. Data stored in component
4. UI updates automatically

---

## Step 11: Rendering Updates in DOM

After change detection:

* Angular updates only changed parts of DOM
* No full page reload
* Fast UI updates

---

## Angular Internal Flow Summary

```
Browser loads index.html
        ↓
main.ts starts Angular
        ↓
AppComponent bootstrapped
        ↓
Component tree created
        ↓
Templates rendered
        ↓
Data binding activated
        ↓
Change detection running
        ↓
User interaction / API calls
        ↓
UI updates dynamically
```

---

## Key Internal Concepts

### 1. Component Tree

Hierarchical structure of UI components.

### 2. Change Detection

System that keeps UI and data in sync.

### 3. Dependency Injection

Automatic service management system.

### 4. Zone.js

Detects async operations and triggers updates.

### 5. Angular Compiler

Converts templates into efficient JavaScript.

---

## Conclusion

Angular works by:

* Bootstrapping a root component
* Building a component tree
* Binding data to templates
* Detecting changes automatically
* Updating only necessary parts of the DOM

This architecture allows Angular to build **fast, scalable, and dynamic Single Page Applications (SPA)**.
