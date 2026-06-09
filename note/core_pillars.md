# Angular Core Pillars

Angular is built on several fundamental pillars that help developers create scalable, maintainable, and high-performance web applications.

## 1. Components

Components are the building blocks of an Angular application. Each component controls a part of the user interface (UI) and consists of:

* HTML template
* TypeScript class
* CSS/SCSS styles

Example:

```typescript id="4kzhz9"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Welcome to Angular';
}
```

### Benefits

* Reusable UI elements
* Better code organization
* Easier maintenance

---

## 2. Modules

Modules group related components, services, directives, and pipes into a cohesive unit.

Every Angular application contains at least one root module called `AppModule`.

Example:

```typescript id="pgjsic"
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Benefits

* Better application structure
* Improved code organization
* Lazy loading support

---

## 3. Templates

Templates define how data is displayed in the user interface using HTML and Angular syntax.

Example:

```html id="u4a8ep"
<h1>{{ title }}</h1>
<button (click)="save()">Save</button>
```

### Features

* Data binding
* Event binding
* Conditional rendering
* Loops

---

## 4. Data Binding

Data binding connects the component's data with the view.

### Types of Data Binding

#### Interpolation

```html id="zrzsjs"
{{ title }}
```

#### Property Binding

```html id="lk55i4"
<img [src]="imageUrl">
```

#### Event Binding

```html id="08ibg4"
<button (click)="submit()">Submit</button>
```

#### Two-Way Binding

```html id="e0wtxh"
<input [(ngModel)]="username">
```

### Benefits

* Automatic UI updates
* Reduced manual DOM manipulation

---

## 5. Directives

Directives extend HTML functionality by adding custom behavior to elements.

### Common Directives

#### Structural Directives

```html id="06n6fx"
<div *ngIf="isLoggedIn">Welcome!</div>
```

```html id="v1g8wv"
<li *ngFor="let item of items">
  {{ item }}
</li>
```

#### Attribute Directives

```html id="i6jlwm"
<div [ngClass]="{'active': isActive}">
  Content
</div>
```

### Benefits

* Dynamic UI behavior
* Cleaner templates

---

## 6. Services and Dependency Injection

Services contain reusable business logic and data access functionality.

Example:

```typescript id="3jpf53"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return [];
  }
}
```

Dependency Injection (DI) allows Angular to automatically provide service instances where needed.

### Benefits

* Reusable code
* Loose coupling
* Easier testing

---

## 7. Routing

Angular Router enables navigation between different views without reloading the page.

Example:

```typescript id="ypl4kv"
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```

### Benefits

* Single Page Application (SPA) navigation
* Better user experience

---

## 8. Pipes

Pipes transform data before displaying it in the UI.

Example:

```html id="mbp1sk"
{{ today | date:'dd/MM/yyyy' }}
```

Common Pipes:

* DatePipe
* CurrencyPipe
* UpperCasePipe
* LowerCasePipe
* PercentPipe

### Benefits

* Cleaner templates
* Easy data formatting

---

## Summary

The main pillars of Angular are:

1. Components
2. Modules
3. Templates
4. Data Binding
5. Directives
6. Services & Dependency Injection
7. Routing
8. Pipes

Together, these pillars provide a powerful framework for building modern, scalable, and maintainable web applications.
