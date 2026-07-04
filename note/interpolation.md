[← Previous: 9.Decorators? →](decorators.md)| [Main Index](../main.md) | [Next: 10.Data Binding / Property Binding? →](property_binding.md)

# Interpolation in Angular

## What is Interpolation?

Interpolation in Angular is a **data binding technique** used to display data from the component class into the HTML template.

It uses **double curly braces `{{ }}`** to bind and display dynamic values in the UI.

---

## Syntax

```html
{{ expression }}
```

The expression inside `{{ }}` is evaluated and the result is displayed in the template.

---

## Example

### Component (TypeScript)

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Welcome to Angular';
  userName = 'Supul';
}
```

---

### Template (HTML)

```html
<h1>{{ title }}</h1>
<p>Hello, {{ userName }}</p>
```

---

### Output

```
Welcome to Angular
Hello, Supul
```

---

## What Can You Use in Interpolation?

You can use:

### 1. Variables

```html
{{ name }}
```

### 2. Expressions

```html
{{ 10 + 20 }}
```

### 3. Method Calls

```html
{{ getUserName() }}
```

---

## Example with Method

### Component

```typescript
getMessage() {
  return 'Angular is powerful!';
}
```

### Template

```html
<p>{{ getMessage() }}</p>
```

---

## Rules of Interpolation

* You can only use **TypeScript expressions**
* You cannot use:

  * `if` statements
  * loops (`for`, `while`)
* It is **read-only (one-way binding)** from component → view

---

## Where Interpolation is Used

* Displaying text
* Showing dynamic values
* Rendering calculated results
* Showing API data

---

## Advantages

* Simple and easy to use
* Automatically updates UI when data changes
* Reduces manual DOM manipulation

---

## Interpolation vs Property Binding

| Feature | Interpolation | Property Binding     |
| ------- | ------------- | -------------------- |
| Syntax  | `{{ value }}` | `[property]="value"` |
| Usage   | Text display  | DOM property binding |
| Example | `{{ name }}`  | `[src]="imageUrl"`   |

---

## Conclusion

Interpolation in Angular is a simple and powerful way to display dynamic data in templates using `{{ }}`. It helps connect the component logic with the user interface efficiently.
[← Previous: 9.Decorators? →](decorators.md)| [Main Index](../main.md) | [Next: 10.Data Binding / Property Binding? →](property_binding.md)
