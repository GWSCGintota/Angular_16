# Passing Data from Child to Parent in Angular

## What is Child to Parent Communication?

In Angular, **Child to Parent communication** is used when a child component needs to send data or events back to its parent component.

This is done using the **`@Output()` decorator** with **`EventEmitter`**.

---

## How It Works

* Child component emits an event
* Parent component listens to that event
* Data flows in **one direction (Child → Parent)**

---

## Syntax

### Child Component

```typescript id="cp1"
@Output() eventName = new EventEmitter<type>();
```

---

## Example

## Step 1: Create Child Component

### child.component.ts

```typescript id="cp2"
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child Component');
  }
}
```

---

### child.component.html

```html id="cp3"
<h3>Child Component</h3>

<button (click)="sendMessage()">
  Send Message to Parent
</button>
```

---

## Step 2: Parent Component

### app.component.ts

```typescript id="cp4"
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  receivedMessage: string = '';

  getMessage(message: string) {
    this.receivedMessage = message;
  }
}
```

---

### app.component.html

```html id="cp5"
<h2>Parent Component</h2>

<p>Message from Child: {{ receivedMessage }}</p>

<app-child (messageEvent)="getMessage($event)"></app-child>
```

---

## Output

* Child button click sends message
* Parent receives and displays:

```text id="cp6"
Message from Child: Hello from Child Component
```

---

## Flow Diagram

```text id="cp7"
Child Component
      ↓ (emit event)
@Output EventEmitter
      ↓
Parent Component
      ↓ (listens to event)
Update UI
```

---

## Real-World Example

### Product Quantity Update

#### Child Component

```typescript id="cp8"
@Output() quantityChange = new EventEmitter<number>();

increaseQty() {
  this.quantityChange.emit(1);
}
```

```html id="cp9"
<button (click)="increaseQty()">Add Item</button>
```

---

#### Parent Component

```html id="cp10"
<app-child (quantityChange)="updateCart($event)"></app-child>

<p>Total Items: {{ totalItems }}</p>
```

```typescript id="cp11"
totalItems = 0;

updateCart(value: number) {
  this.totalItems += value;
}
```

---

## Key Points

* Uses `@Output()` and `EventEmitter`
* Data flows **Child → Parent**
* Parent listens using `(eventName)="method()"`
* Commonly used for:

  * Button clicks
  * Form submissions
  * Notifications
  * UI updates

---

## Passing Complex Data

### Child

```typescript id="cp12"
@Output() userEvent = new EventEmitter<any>();

sendUser() {
  this.userEvent.emit({
    name: 'Supul',
    age: 25
  });
}
```

---

### Parent

```html id="cp13"
<app-child (userEvent)="receiveUser($event)"></app-child>
```

```typescript id="cp14"
receiveUser(user: any) {
  console.log(user.name);
  console.log(user.age);
}
```

---

## Conclusion

Child to Parent communication in Angular is achieved using `@Output()` and `EventEmitter`. It allows components to communicate efficiently and is widely used in real-world Angular applications for event handling and UI updates.
