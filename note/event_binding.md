# Event Binding in Angular

## What is Event Binding?

Event binding in Angular is a **one-way data binding technique** used to handle **user interactions and DOM events** such as clicks, key presses, mouse movements, etc.

It allows Angular to listen to events from the view (HTML) and execute methods in the component.

---

## Syntax

```html id="eb1"
(event)="functionName()"
```

Or with event object:

```html id="eb2"
(event)="functionName($event)"
```

---

## Example

### Component (TypeScript)

```typescript id="eb3"
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  message = '';

  showMessage() {
    this.message = 'Button clicked!';
  }

  onKeyPress(event: any) {
    console.log('Key pressed:', event.target.value);
  }
}
```

---

### Template (HTML)

```html id="eb4"
<button (click)="showMessage()">Click Me</button>

<p>{{ message }}</p>

<input (keyup)="onKeyPress($event)" />
```

---

## Output

* Clicking the button updates the message
* Typing in input logs key presses

---

## Common DOM Events Used in Angular

### 1. Click Event

```html id="eb5"
<button (click)="handleClick()">Click</button>
```

---

### 2. Key Events

```html id="eb6"
<input (keyup)="onKeyUp($event)">
```

Other key events:

* `(keydown)`
* `(keypress)`

---

### 3. Mouse Events

```html id="eb7"
<div (mouseenter)="onHover()">Hover me</div>
<div (mouseleave)="onLeave()">Leave me</div>
```

---

### 4. Change Event

```html id="eb8"
<select (change)="onChange($event)">
  <option value="1">Option 1</option>
</select>
```

---

## Using Event Object ($event)

Angular provides `$event` to access event details.

### Example:

```html id="eb9"
<input (input)="onInput($event)">
```

```typescript id="eb10"
onInput(event: any) {
  console.log(event.target.value);
}
```

---

## Event Binding Flow

```text id="eb11"
User Action (click, keypress, etc.)
        ↓
Event triggered in DOM
        ↓
Angular captures event
        ↓
Component method executes
        ↓
UI updates automatically
```

---

## Event Binding vs Other Bindings

| Feature   | Event Binding    | Property Binding   | Interpolation    |
| --------- | ---------------- | ------------------ | ---------------- |
| Direction | View → Component | Component → View   | Component → View |
| Syntax    | `(event)`        | `[property]`       | `{{ value }}`    |
| Purpose   | Handle events    | Set DOM properties | Display data     |

---

## Advantages

* Easy handling of user interactions
* Keeps logic inside component
* Improves code organization
* Supports all native DOM events

---

## Conclusion

Event binding in Angular is used to respond to user actions such as clicks, typing, and mouse movements. It connects the view to the component logic and enables dynamic and interactive web applications.
