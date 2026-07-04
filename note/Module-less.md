[← Previous: 6.Angular Core Pillars? →](core_pillars.md)| [Main Index](../main.md) | [Next: 8.Export and Import? →](export_import.md)


# Module-less Concept in Angular (Standalone Architecture)

## What is Module-less Concept?

The **module-less concept** in Angular refers to building applications **without using `NgModules`** such as `AppModule` or feature modules.

Instead of organizing an application using modules, Angular uses **standalone components** to structure the app.

This approach was introduced in **Angular 14** and became widely adopted in later versions.

---

## Traditional Module-Based Approach

In older Angular applications, every component must be declared inside a module.

### Example:

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Key Characteristics:

* Uses `NgModule`
* Components must be declared inside modules
* Requires module hierarchy
* More boilerplate code

---

## Module-less (Standalone) Approach

In the module-less approach, components are self-contained using:

```typescript
standalone: true
```

### Example Standalone Component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Welcome to Standalone Angular</h1>`
})
export class HomeComponent {}
```

No need to declare this component inside an `NgModule`.

---

## Bootstrapping Without AppModule

Instead of bootstrapping `AppModule`, Angular directly bootstraps the root component.

### Example:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent);
```

---

## Routing in Module-less Angular

Routing is also handled without modules.

### Example:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  }
];
```

---

## Advantages of Module-less Concept

* Less boilerplate code
* Simpler project structure
* Easier learning curve for beginners
* Better tree-shaking and performance
* More modern Angular architecture

---

## Disadvantages

* Older Angular projects still rely on modules
* Migration effort required for large applications
* Some legacy patterns still depend on `NgModules`

---

## Summary

The module-less concept in Angular means:

> Building applications using **standalone components instead of NgModules**, resulting in simpler and more modern application architecture.

---

## Conclusion

Module-less Angular is the future of Angular development. It reduces complexity, improves readability, and allows developers to build applications faster with fewer structural constraints.


[← Previous: 6.Angular Core Pillars? →](core_pillars.md)| [Main Index](../main.md) | [Next: 8.Export and Import? →](export_import.md)
