[← Previous: 8.Export and Import? →](export_import.md)| [Main Index](../main.md) | [Next: Type of Decorators? →](decorators.md)



# Decorators in Angular

## What are Decorators?

Decorators in Angular are special **TypeScript functions** that add metadata to classes, properties, methods, or parameters. They help Angular understand how a class or property should behave within the framework.

Decorators are a core part of Angular’s architecture and are used to define components, services, modules, and more.

---

## Types of Angular Decorators

Angular provides several important decorators. Below are the most commonly used ones:

---

## 1. @Component

The `@Component` decorator is used to define a UI component.

### Example:

```typescript id="c1"
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Welcome to Angular</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HomeComponent {}
```

### Purpose:

* Defines a component
* Controls HTML template and styles

---

## 2. @NgModule

The `@NgModule` decorator defines an Angular module.

### Example:

```typescript id="c2"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Purpose:

* Organizes application structure
* Groups components, services, and pipes

---

## 3. @Injectable

The `@Injectable` decorator is used to define a service that can be injected into components or other services.

### Example:

```typescript id="c3"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return ['John', 'Jane', 'Alex'];
  }
}
```

### Purpose:

* Enables dependency injection
* Makes services reusable

---

## 4. @Input

The `@Input` decorator allows data to be passed from a parent component to a child component.

### Example:

```typescript id="c4"
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ name }}</p>`
})
export class ChildComponent {
  @Input() name: string = '';
}
```

### Usage in parent:

```html id="c5"
<app-child [name]="'Supul'"></app-child>
```

---

## 5. @Output

The `@Output` decorator is used to send data from a child component to a parent component using event emitters.

### Example:

```typescript id="c6"
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendData()">Send</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendData() {
    this.messageEvent.emit('Hello Parent');
  }
}
```

### Parent usage:

```html id="c7"
<app-child (messageEvent)="receiveMessage($event)"></app-child>
```

---

## 6. @HostListener

The `@HostListener` decorator listens to events on the host element.

### Example:

```typescript id="c8"
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse Entered');
  }
}
```

---

## 7. @HostBinding

The `@HostBinding` decorator binds properties to the host element.

### Example:

```typescript id="c9"
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor = 'yellow';
}
```

---

## Summary

| Decorator     | Purpose                         |
| ------------- | ------------------------------- |
| @Component    | Defines UI component            |
| @NgModule     | Defines module structure        |
| @Injectable   | Defines service                 |
| @Input        | Parent → Child communication    |
| @Output       | Child → Parent communication    |
| @HostListener | Listen to DOM events            |
| @HostBinding  | Bind properties to host element |

---

## Conclusion

Decorators are essential in Angular as they provide metadata that tells Angular how to process classes and their members. They form the foundation of Angular’s component-based architecture.

[← Previous: 8.Export and Import? →](export_import.md)| [Main Index](../main.md) | [Next: Type of Decorators? →](decorators.md)

