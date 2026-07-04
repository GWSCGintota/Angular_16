
[← Previous: 9.Decorators? →](decorators.md)| [Main Index](../main.md) | [Next: 10.Data Binding / interpolation? →](interpolation.md)


# Types of Decorators in Angular

## Introduction

In Angular, decorators are special TypeScript functions used to add metadata to classes, properties, methods, and parameters. They help Angular understand how different parts of the application should behave.

---

## 1. Class Decorators

Class decorators are applied to a **class** and define its role in Angular.

### Common Class Decorators:

* `@Component`
* `@NgModule`
* `@Directive`
* `@Pipe`
* `@Injectable`

### Example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home Page</h1>`
})
export class HomeComponent {}
```

### Purpose:

* Define Angular building blocks such as components, services, modules, etc.

---

## 2. Property Decorators

Property decorators are applied to **class properties**.

### Common Property Decorators:

* `@Input`
* `@Output`
* `@HostBinding`

### Example:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ name }}</p>`
})
export class ChildComponent {
  @Input() name: string = '';
}
```

### Purpose:

* Pass data between components
* Bind properties to the DOM

---

## 3. Method Decorators

Method decorators are applied to **methods inside a class**.

### Common Method Decorators:

* `@HostListener`

### Example:

```typescript
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse entered element');
  }
}
```

### Purpose:

* Handle DOM events like click, hover, scroll, etc.

---

## 4. Parameter Decorators

Parameter decorators are applied to **constructor parameters**.

### Common Parameter Decorator:

* `@Inject`

### Example:

```typescript
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `{{ apiUrl }}`
})
export class AppComponent {

  constructor(@Inject('API_URL') public apiUrl: string) {}
}
```

### Purpose:

* Inject dependencies manually into classes

---

## Summary Table

| Type                 | Decorators                                                      | Purpose                        |
| -------------------- | --------------------------------------------------------------- | ------------------------------ |
| Class Decorators     | `@Component`, `@NgModule`, `@Directive`, `@Pipe`, `@Injectable` | Define Angular building blocks |
| Property Decorators  | `@Input`, `@Output`, `@HostBinding`                             | Work with class properties     |
| Method Decorators    | `@HostListener`                                                 | Handle DOM and user events     |
| Parameter Decorators | `@Inject`                                                       | Dependency injection           |

---

## Conclusion

Angular decorators are essential for defining application structure, enabling dependency injection, handling events, and connecting components with the DOM. They form the foundation of Angular’s metadata-driven architecture.

[← Previous: 9.Decorators? →](decorators.md)| [Main Index](../main.md) | [Next: 10.Data Binding / interpolation? →](interpolation.md)
