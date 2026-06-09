# How to Use `ng-content` in Angular (With Real-World Example)

## What is `ng-content`?

`ng-content` is an Angular feature used for **content projection**, which allows you to pass HTML content from a **parent component into a child component**.

Instead of hardcoding content inside a component, you can design flexible components that accept external content.

---

## Why Use `ng-content`?

* Makes components reusable
* Helps build flexible UI components
* Reduces duplication of code
* Common in real UI components like modals, cards, dialogs

---

## Basic Syntax

### Child Component

```html id="nc1"
<ng-content></ng-content>
```

---

## Real-World Example: Reusable Card Component

Let’s build a **reusable Card Component** like those used in dashboards, e-commerce apps, and admin panels.

---

## Step 1: Create Card Component (Child)

### card.component.html

```html id="nc2"
<div class="card">
  <div class="card-header">
    <ng-content select="[card-title]"></ng-content>
  </div>

  <div class="card-body">
    <ng-content select="[card-body]"></ng-content>
  </div>

  <div class="card-footer">
    <ng-content select="[card-footer]"></ng-content>
  </div>
</div>
```

---

## Step 2: Use Card Component (Parent)

### app.component.html

```html id="nc3"
<app-card>

  <h2 card-title>User Profile</h2>

  <p card-body>
    Name: Supul Gintota <br>
    Role: Angular Developer <br>
    Location: Sydney
  </p>

  <button card-footer (click)="save()">
    Save Profile
  </button>

</app-card>
```

---

## Step 3: Component Logic

### app.component.ts

```typescript id="nc4"
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  save() {
    console.log('Profile saved!');
  }
}
```

---

## Output Behavior

The final UI will render like this:

* **Card Title:** User Profile
* **Card Body:** User details
* **Card Footer:** Save button

But all layout logic is handled inside the **Card Component**, making it reusable.

---

## Real-World Usage of `ng-content`

### 1. Modal Dialog

```html id="nc5"
<app-modal>
  <h2 modal-title>Delete Confirmation</h2>
  <p modal-body>Are you sure you want to delete this item?</p>
  <button modal-footer>Confirm</button>
</app-modal>
```

---

### 2. Dashboard Widget

```html id="nc6"
<app-widget>
  <h3 widget-header>Sales Report</h3>
  <div widget-content>Chart goes here</div>
</app-widget>
```

---

## How `ng-content` Works Internally

```text id="nc7"
Parent Component
        ↓
Provides HTML content
        ↓
Child Component receives it
        ↓
Angular projects content into <ng-content>
        ↓
Final UI is rendered
```

---

## Key Features

* Content is passed from parent → child
* Supports multiple slots using `select`
* Helps build reusable UI components
* Does NOT create extra wrapper elements

---

## ng-content vs ng-template

| Feature  | ng-content             | ng-template                |
| -------- | ---------------------- | -------------------------- |
| Purpose  | Content projection     | Dynamic template rendering |
| Source   | Parent component       | Inside component           |
| Use case | Reusable UI components | Conditional/dynamic views  |

---

## Best Practices

* Use for UI layout components (cards, modals, layouts)
* Avoid overusing for simple text
* Combine with `@Input()` for better flexibility

---

## Conclusion

`ng-content` is widely used in real-world Angular applications to build **reusable and flexible UI components** like cards, modals, dashboards, and layout containers. It helps separate structure from content, making applications cleaner and more maintainable.
