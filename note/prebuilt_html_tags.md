# Angular Prebuilt HTML Tags (Common Angular Directives & Elements)

## Introduction

Angular provides several **built-in structural and attribute directives** that behave like special HTML tags or enhancements to HTML. These are not real HTML tags, but Angular extends HTML using them.

---

## 1. Angular Structural Directives (Prebuilt “HTML-like” Tags)

Structural directives change the structure of the DOM.

---

### 1.1 *ngIf

Used to conditionally display elements.

```html id="a1"
<div *ngIf="isLoggedIn">
  Welcome User
</div>
```

---

### 1.2 *ngFor

Used for looping through lists.

```html id="a2"
<li *ngFor="let item of items">
  {{ item }}
</li>
```

---

### 1.3 *ngSwitch

Used for multiple conditions.

```html id="a3"
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin Panel</p>
  <p *ngSwitchCase="'user'">User Dashboard</p>
  <p *ngSwitchDefault>Guest</p>
</div>
```

---

## 2. Angular Attribute Directives

These modify appearance or behavior of elements.

---

### 2.1 ngClass

Used to add or remove CSS classes dynamically.

```html id="a4"
<div [ngClass]="{ 'active': isActive }">
  Hello Angular
</div>
```

---

### 2.2 ngStyle

Used to apply dynamic styles.

```html id="a5"
<div [ngStyle]="{ 'color': textColor, 'font-size': fontSize }">
  Styled Text
</div>
```

---

## 3. Angular Template Tags

---

### 3.1 ng-template

Used for defining reusable or conditional templates.

```html id="a6"
<ng-template #myTemplate>
  <p>This is a template</p>
</ng-template>
```

---

### 3.2 ng-container

Used as a logical container without adding extra DOM element.

```html id="a7"
<ng-container *ngIf="showContent">
  <p>No extra div will be added</p>
</ng-container>
```

---

## 4. Angular Form Tags (Prebuilt Directives)

### 4.1 ngModel

Used for two-way data binding in forms.

```html id="a8"
<input [(ngModel)]="username">
```

---

## 5. Angular Router Tags

### router-outlet

Used to load components based on routing.

```html id="a9"
<router-outlet></router-outlet>
```

---

### routerLink

Used for navigation.

```html id="a10"
<a routerLink="/home">Home</a>
```

---

## 6. Summary Table

| Feature       | Purpose                |
| ------------- | ---------------------- |
| *ngIf         | Conditional rendering  |
| *ngFor        | Looping                |
| *ngSwitch     | Multiple conditions    |
| ngClass       | Dynamic CSS classes    |
| ngStyle       | Dynamic styling        |
| ng-template   | Reusable templates     |
| ng-container  | Logical grouping       |
| ngModel       | Two-way binding        |
| router-outlet | Load routed components |
| routerLink    | Navigation             |

---

## Conclusion

Angular does not introduce new real HTML tags but provides **powerful built-in directives and template elements** that behave like prebuilt HTML enhancements. These make Angular applications dynamic, interactive, and easier to manage.
