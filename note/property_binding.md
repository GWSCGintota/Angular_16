[← Previous:10.Data Binding / interpolation? →](interpolation.md)| [Main Index](../main.md) | [Next: 10.Data Binding / Event Binding? →](event_binding.md)

# Property Binding in Angular

## What is Property Binding?

Property binding in Angular is a **one-way data binding technique** used to set values of **HTML element properties** from the component class.

It allows Angular to bind component data directly to DOM properties using **square brackets `[]`**.

---

## Syntax

```html id="pb1"
[property]="expression"
```

---

## Example

### Component (TypeScript)

```typescript id="pb2"
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  imageUrl = 'https://example.com/image.jpg';
  isDisabled = true;
}
```

---

### Template (HTML)

```html id="pb3"
<img [src]="imageUrl" />

<button [disabled]="isDisabled">Click Me</button>
```

---

### Output

* Image will load from `imageUrl`
* Button will be disabled

---

## How Property Binding Works

1. Component provides data
2. Angular binds data to DOM property
3. UI updates automatically when data changes

---

## Common Uses of Property Binding

### 1. Binding Image Source

```html id="pb4"
<img [src]="imageUrl">
```

---

### 2. Disabling a Button

```html id="pb5"
<button [disabled]="isDisabled">Submit</button>
```

---

### 3. Setting CSS Class

```html id="pb6"
<div [class.active]="isActive">Hello</div>
```

---

### 4. Binding Input Value

```html id="pb7"
<input [value]="userName">
```

---

## Property Binding vs Interpolation

| Feature     | Property Binding     | Interpolation |
| ----------- | -------------------- | ------------- |
| Syntax      | `[property]="value"` | `{{ value }}` |
| Used For    | DOM properties       | Text display  |
| Example     | `[src]="imageUrl"`   | `{{ title }}` |
| Flexibility | High                 | Limited       |

---

## Important Points

* Property binding uses **square brackets `[]`**
* It is **one-way binding (component → view)**
* It updates DOM properties, not HTML attributes directly
* Automatically updates when data changes

---

## When to Use Property Binding

Use property binding when:

* You need to set DOM properties dynamically
* Working with images, buttons, inputs, or styles
* Handling boolean values like `disabled`, `checked`, etc.

---

## Conclusion

Property binding in Angular is a powerful feature that allows dynamic control of DOM properties using data from the component. It improves UI flexibility and keeps the view synchronized with application state.
[← Previous:10.Data Binding / interpolation? →](interpolation.md)| [Main Index](../main.md) | [Next: 10.Data Binding / Event Binding? →](event_binding.md)
