# Angular Component Lifecycle

## Introduction

Angular components have a **lifecycle** that represents the different stages of a component from creation to destruction. Angular provides **lifecycle hooks** that allow you to execute code at specific stages.

---

## Angular Lifecycle Hooks

Angular provides the following important lifecycle hooks:

---

## 1. ngOnChanges

### What it does:

Called when **input properties (`@Input`) change**.

### When it runs:

* Before `ngOnInit`
* Whenever input data changes

### Example:

```typescript id="lc1"
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ name }}</p>`
})
export class ChildComponent implements OnChanges {

  @Input() name: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('Input changed:', changes);
  }
}
```

---

## 2. ngOnInit

### What it does:

Called once when the component is initialized.

### When it runs:

* After the first `ngOnChanges`

### Example:

```typescript id="lc2"
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home Component</h1>`
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    console.log('Component Initialized');
  }
}
```

---

## 3. ngDoCheck

### What it does:

Called during every change detection cycle.

### Use case:

Custom change detection logic.

### Example:

```typescript id="lc3"
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<p>Check console</p>`
})
export class DemoComponent implements DoCheck {

  ngDoCheck() {
    console.log('Change detection running');
  }
}
```

---

## 4. ngAfterContentInit

### What it does:

Called after external content is projected using `ng-content`.

### Example:

```typescript id="lc4"
import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>`
})
export class CardComponent implements AfterContentInit {

  ngAfterContentInit() {
    console.log('Content projected');
  }
}
```

---

## 5. ngAfterContentChecked

### What it does:

Called after every check of projected content.

---

## 6. ngAfterViewInit

### What it does:

Called after component’s view (HTML) is fully initialized.

### Example:

```typescript id="lc5"
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `<h1 #title>View Loaded</h1>`
})
export class ViewComponent implements AfterViewInit {

  ngAfterViewInit() {
    console.log('View initialized');
  }
}
```

---

## 7. ngAfterViewChecked

### What it does:

Called after every check of the component’s view.

---

## 8. ngOnDestroy

### What it does:

Called just before the component is destroyed.

### Use case:

* Cleanup subscriptions
* Remove event listeners
* Prevent memory leaks

### Example:

```typescript id="lc6"
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<p>Demo Component</p>`
})
export class DemoComponent implements OnDestroy {

  ngOnDestroy() {
    console.log('Component destroyed');
  }
}
```

---

## Angular Lifecycle Flow

```text id="lc7"
Constructor
   ↓
ngOnChanges
   ↓
ngOnInit
   ↓
ngDoCheck
   ↓
ngAfterContentInit
   ↓
ngAfterContentChecked
   ↓
ngAfterViewInit
   ↓
ngAfterViewChecked
   ↓
ngOnDestroy
```

---

## Summary Table

| Hook                  | Purpose                       |
| --------------------- | ----------------------------- |
| ngOnChanges           | Input property changes        |
| ngOnInit              | Component initialization      |
| ngDoCheck             | Custom change detection       |
| ngAfterContentInit    | After content projection      |
| ngAfterContentChecked | After projected content check |
| ngAfterViewInit       | After view initialization     |
| ngAfterViewChecked    | After view updates            |
| ngOnDestroy           | Cleanup before destroy        |

---

## Real-World Use Cases

* `ngOnInit` → API calls
* `ngOnDestroy` → unsubscribe observables
* `ngAfterViewInit` → DOM manipulation
* `ngOnChanges` → react to input changes

---

## Conclusion

Angular lifecycle hooks allow developers to control behavior at different stages of a component’s life, making applications more powerful, efficient, and manageable.
