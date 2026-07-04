[← Previous:10.Data Binding / Event Binding? →](event_binding.md)| [Main Index](../main.md) | [Next: 11.ng-template? →](ng_template.md)


# Two-Way Data Binding in Angular

## What is Two-Way Data Binding?

Two-way data binding in Angular is a mechanism that allows **automatic synchronization of data between the component (TypeScript) and the view (HTML)**.

This means:

* If data changes in the component → UI updates automatically
* If user changes data in UI → component updates automatically

It combines:

* Property Binding (`[]`)
* Event Binding (`()`)

---

## Syntax

```html id="tw1"
[(ngModel)]="property"
```

This is called **banana in a box syntax**.

---

## Example

### Step 1: Import FormsModule

To use two-way binding, you must import `FormsModule`.

```typescript id="tw2"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class AppModule {}
```

---

### Step 2: Component (TypeScript)

```typescript id="tw3"
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  userName: string = '';
}
```

---

### Step 3: Template (HTML)

```html id="tw4"
<input [(ngModel)]="userName" placeholder="Enter your name" />

<p>Your name is: {{ userName }}</p>
```

---

## Output

* When user types in input field → `userName` updates automatically
* Paragraph updates instantly without extra code

---

## How Two-Way Binding Works Internally

```text id="tw5"
User types in input
        ↓
ngModel captures event
        ↓
Component property updated
        ↓
Angular updates UI automatically
```

---

## Where Two-Way Binding is Used

* Forms
* Input fields
* Search boxes
* Real-time data entry
* Login forms

---

## Two-Way Binding vs Other Bindings

| Feature   | Two-Way Binding | Property Binding | Event Binding    |
| --------- | --------------- | ---------------- | ---------------- |
| Syntax    | `[(ngModel)]`   | `[property]`     | `(event)`        |
| Direction | Both ways       | Component → View | View → Component |
| Use case  | Forms           | Display data     | Handle events    |

---

## Important Notes

* Requires `FormsModule`
* Uses `[(ngModel)]`
* Suitable for form inputs
* Not recommended for all scenarios (use carefully for performance)

---

## Example Use Case

```html id="tw6"
<input [(ngModel)]="email" placeholder="Enter email">
<button (click)="submit()">Submit</button>
```

```typescript id="tw7"
email: string = '';

submit() {
  console.log(this.email);
}
```

---

## Conclusion

Two-way data binding in Angular provides a simple way to keep the model and view in sync automatically. It is widely used in forms and user input handling, making development faster and easier.

[← Previous:10.Data Binding / Event Binding? →](event_binding.md)| [Main Index](../main.md) | [Next: 11.ng-template? →](ng_template.md)
