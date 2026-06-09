# ng-template in Angular

## What is `ng-template`?

`ng-template` is an Angular structural element used to define **a template that is not rendered by default**. Instead, it is used as a **reusable or conditional block of HTML** that Angular can render when needed.

It is mainly used with structural directives like:

* `*ngIf`
* `*ngFor`
* `ngTemplateOutlet`

---

## Key Features

* Not displayed directly in the DOM
* Acts as a blueprint for rendering content
* Rendered only when explicitly instructed
* Helps in conditional and dynamic UI rendering

---

## Basic Syntax

```html id="nt1"
<ng-template>
  <p>This content is not rendered by default</p>
</ng-template>
```

---

## Example 1: Using ng-template with *ngIf

```html id="nt2"
<div *ngIf="isLoggedIn; else loginTemplate">
  <h1>Welcome User</h1>
</div>

<ng-template #loginTemplate>
  <h1>Please Login</h1>
</ng-template>
```

### Explanation:

* If `isLoggedIn` is true → show welcome message
* Otherwise → show `loginTemplate`

---

## Example 2: Using ng-template with ngIf (then/else)

```html id="nt3"
<ng-container *ngIf="isAdmin; then adminBlock; else userBlock"></ng-container>

<ng-template #adminBlock>
  <p>Admin Dashboard</p>
</ng-template>

<ng-template #userBlock>
  <p>User Dashboard</p>
</ng-template>
```

---

## Example 3: Using ng-template with ngTemplateOutlet

```html id="nt4"
<ng-template #myTemplate>
  <p>This is a reusable template</p>
</ng-template>

<div [ngTemplateOutlet]="myTemplate"></div>
```

### Explanation:

* The template is defined once
* It can be reused multiple times

---

## Example 4: Using ng-template in *ngFor (Advanced Use)

```html id="nt5"
<ng-template ngFor let-item [ngForOf]="items">
  <p>{{ item }}</p>
</ng-template>
```

---

## Difference Between ng-template and div

| Feature         | ng-template           | div         |
| --------------- | --------------------- | ----------- |
| Rendered in DOM | ❌ No (by default)     | ✅ Yes       |
| Purpose         | Template logic        | Layout/UI   |
| Usage           | Structural directives | Normal HTML |

---

## When to Use ng-template

Use `ng-template` when:

* You need conditional rendering
* You want reusable UI blocks
* You want to define fallback content
* You want better control over templates

---

## Common Use Cases

* Loading screens
* Fallback UI (error/empty states)
* Conditional rendering
* Reusable UI templates

---

## Internal Working

```text id="nt6"
Angular compiles ng-template
        ↓
Stores template in memory
        ↓
Renders only when triggered
        ↓
Inserts into DOM dynamically
```

---

## Summary

* `ng-template` is a **non-rendered template container**
* It is used for **dynamic and conditional rendering**
* Works with directives like `*ngIf`, `*ngFor`, and `ngTemplateOutlet`

---

## Conclusion

`ng-template` is a powerful Angular feature that helps developers create flexible, reusable, and dynamic UI structures without directly rendering content until it is needed.
