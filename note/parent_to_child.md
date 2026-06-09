# Passing Data from Parent to Child in Angular

## What is Parent to Child Communication?

In Angular, **Parent to Child communication** is used to pass data from a parent component to a child component.

This is done using the **`@Input()` decorator**.

---

## How It Works

* Parent component sends data
* Child component receives data using `@Input()`
* Data flows in **one direction (Parent → Child)**

---

## Syntax

### Child Component

```typescript
@Input() propertyName: type;
```

---

## Example

## Step 1: Create Child Component

### child.component.ts

```typescript id="pc1"
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {

  @Input() userName: string = '';
  @Input() age: number = 0;
}
```

---

### child.component.html

```html id="pc2"
<h3>Child Component</h3>

<p>User Name: {{ userName }}</p>
<p>Age: {{ age }}</p>
```

---

## Step 2: Parent Component

### app.component.ts

```typescript id="pc3"
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  name = 'Supul';
  userAge = 25;
}
```

---

### app.component.html

```html id="pc4"
<h2>Parent Component</h2>

<app-child [userName]="name" [age]="userAge"></app-child>
```

---

## Output

* Parent sends:

  * `name = Supul`
  * `userAge = 25`

* Child receives and displays:

```
User Name: Supul
Age: 25
```

---

## Flow Diagram

```text id="pc5"
Parent Component
      ↓
[ userName, age ]
      ↓
Child Component (@Input)
      ↓
Display in template
```

---

## Real-World Example

### Product Card Example

#### Parent Component

```html id="pc6"
<app-product-card
  [productName]="'Laptop'"
  [price]="75000">
</app-product-card>
```

---

#### Child Component

```typescript id="pc7"
@Input() productName: string = '';
@Input() price: number = 0;
```

---

#### Child Template

```html id="pc8"
<h3>{{ productName }}</h3>
<p>Price: {{ price }}</p>
```

---

## Key Points

* Uses `@Input()` decorator
* Data flows **one-way (Parent → Child)**
* Useful for reusable components
* Can pass strings, numbers, objects, arrays

---

## Passing Complex Object Example

### Parent

```html id="pc9"
<app-child [user]="userData"></app-child>
```

```typescript id="pc10"
userData = {
  name: 'Supul',
  age: 25,
  role: 'Developer'
};
```

---

### Child

```typescript id="pc11"
@Input() user: any;
```

```html id="pc12"
<p>{{ user.name }}</p>
<p>{{ user.age }}</p>
<p>{{ user.role }}</p>
```

---

## Conclusion

Passing data from parent to child in Angular is done using `@Input()`. It is a simple and powerful way to share data between components and build reusable UI structures.
