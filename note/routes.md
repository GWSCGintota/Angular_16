# Angular Routing - Complete Guide

# 1. What is Angular Routing?

Routing allows users to navigate between different pages or views in a Single Page Application (SPA) without reloading the browser.

Instead of loading a new HTML page, Angular dynamically loads components.

---

# Why Routing?

Without Routing:

```text
example.com
```

Only one page is displayed.

With Routing:

```text
example.com/home
example.com/about
example.com/contact
example.com/products
```

Each URL displays a different component.

---
# How to Create a Router Module Using Angular CLI Commands

## Option 1: Create a New Angular Project with Routing

When creating a new project:

```bash
ng new my-app --routing
```

This automatically creates:

```text
src/app/app-routing.module.ts
```

---

## Option 2: Generate a Routing Module

If your project already exists and you want to create a routing module manually:

```bash
ng generate module app-routing --flat --module=app
```

or

```bash
ng g m app-routing --flat --module=app
```

This creates:

```text
src/app/app-routing.module.ts
```



# 2. How Angular Routing Works

```text
User Clicks Link
        ↓
Angular Router
        ↓
Matches Route
        ↓
Loads Component
        ↓
Displays in Router Outlet
```

---

# 3. Enable Routing During Project Creation

```bash
ng new my-app
```

Angular CLI asks:

```text
Would you like to add Angular routing?
```

Choose:

```text
Yes
```

Angular creates:

```text
app-routing.module.ts
```

or in Angular 16 standalone applications:

```text
app.routes.ts
```

---

# 4. Router Outlet

Router Outlet acts as a placeholder where routed components are displayed.

## app.component.html

```html
<h1>Angular Routing Demo</h1>

<router-outlet></router-outlet>
```

---

# 5. Creating Components

```bash
ng generate component home

ng generate component about

ng generate component contact
```

---

# 6. Defining Routes

## app.routes.ts

```typescript
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  }

];
```

---

# 7. Bootstrap Routes

## main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';

import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
```

---

# 8. Navigation Using routerLink

## app.component.html

```html
<nav>

  <a routerLink="/home">
    Home
  </a>

  <a routerLink="/about">
    About
  </a>

  <a routerLink="/contact">
    Contact
  </a>

</nav>

<router-outlet></router-outlet>
```

---

# 9. Route Parameters

Used to pass dynamic values through URLs.

## Route Configuration

```typescript
{
  path: 'user/:id',
  component: UserComponent
},
{
  path: 'user/:id/test',
    component: UserComponent
}
```

---

## Navigation

```html
<a routerLink="/user/101">
  View User
</a>
```

---

## Reading Parameters

```typescript
import { ActivatedRoute } from '@angular/router';

constructor(
  private route: ActivatedRoute
){}

ngOnInit(){

  const id =
  this.route.snapshot.paramMap.get('id');

  console.log(id);

}
```

---

# Example URL

```text
localhost:4200/user/101
```

Output:

```text
101
```

---

# 10. Query Parameters

Useful for filtering and searching.

## URL

```text
localhost:4200/products?category=laptop
```

---

## Navigation

```typescript
this.router.navigate(
 ['/products'],
 {
   queryParams:{
     category:'laptop'
   }
 });
```

---

## Read Query And Path Parameters

```typescript
this.route.queryParams
.subscribe(params => {

 console.log(params['category']);

});
```
```angular2html 
Pass data for path param
public navigateToProduct(id:number){
    this.navigation.navigate(['/shop/product'],id);
}

```

```angular2html
const productId = this.route.snapshot.params['id'];
```

---

# 11. Route Redirect

Automatically redirect users.

```typescript
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
```

---

# Example

URL:

```text
localhost:4200
```

Redirects to:

```text
localhost:4200/home
```

---

# 12. Wildcard Route (404 Page)

Handles invalid URLs. If user enter invalid URL the site will load to predefine web page. 

```typescript
{
  path: '**',
  component: NotFoundComponent
}
```

---

# Example

```text
localhost:4200/abcxyz
```

Shows:

```text
Page Not Found
```

---

# 13. Programmatic Navigation

Navigate using TypeScript.

```typescript
import { Router } from '@angular/router';

constructor(
 private router: Router
){}
```

---

## Navigate

```typescript
this.router.navigate(
 ['/home']
);
```

---

## Navigate with Parameters

```typescript
this.router.navigate(
 ['/user', 100]
);
```

---

# 14. Child Routes

Useful for dashboards and admin panels.

## Route Configuration

```typescript
{
  path:'admin',
  component:AdminComponent,

  children:[

    {
      path:'users',
      component:UsersComponent
    },

    {
      path:'settings',
      component:SettingsComponent
    }

  ]
}
```

---

# URLs

```text
/admin/users

/admin/settings
```

---

# Parent Component

```html
<h2>Admin Panel</h2>

<router-outlet></router-outlet>
```

---

# 15. Route Guards

Protect routes from unauthorized users.

---

## Generate Guard

```bash
ng generate guard auth
```

---

## Guard Example

```typescript
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn =
(route, state) => {

 const isLoggedIn = true;

 return isLoggedIn;
};
```

---

## Apply Guard

```typescript
{
  path:'admin',
  component:AdminComponent,
  canActivate:[authGuard]
}
```

---

# 16. Lazy Loading

Loads modules only when needed.

Improves application performance.

---

## Route Configuration

```typescript
{
  path:'admin',

  loadChildren: () =>
    import('./admin/admin.module')
    .then(m => m.AdminModule)
}
```

---

# Benefits

* Faster startup
* Smaller bundle size
* Better performance

---

# 17. Route Resolvers

Fetch data before component loads.

---

## Resolver

```typescript
import { ResolveFn } from '@angular/router';

export const userResolver:
ResolveFn<any> = () => {

 return fetch('/api/users');

};
```

---

## Route

```typescript
{
 path:'users',
 component:UsersComponent,
 resolve:{
   users:userResolver
 }
}
```

---

# Access Resolved Data

```typescript
this.route.data
.subscribe(data => {

 console.log(data['users']);

});
```

---

# 18. Router Events

Monitor navigation events.

```typescript
import {
 Router,
 NavigationStart,
 NavigationEnd
} from '@angular/router';
```

```typescript
this.router.events
.subscribe(event => {

 if(event instanceof NavigationStart){
   console.log('Navigation Started');
 }

 if(event instanceof NavigationEnd){
   console.log('Navigation Completed');
 }

});
```

---

# 19. Route Data

Pass static data to routes.

```typescript
{
 path:'home',
 component:HomeComponent,

 data:{
   title:'Home Page'
 }
}
```

---

## Read Data

```typescript
this.route.data
.subscribe(data => {

 console.log(data['title']);

});
```

---

# 20. Real-World Routing Example

## E-Commerce Application

```text
/
├── home
├── products
├── product/:id
├── cart
├── checkout
├── login
├── profile
└── admin
```

---

## Routes

```typescript
const routes = [

 {
   path:'home',
   component:HomeComponent
 },

 {
   path:'products',
   component:ProductsComponent
 },

 {
   path:'product/:id',
   component:ProductDetailsComponent
 },

 {
   path:'cart',
   component:CartComponent
 },

 {
   path:'checkout',
   component:CheckoutComponent
 }

];
```

---

# Routing Lifecycle

```text
User Clicks Link
        ↓
RouterLink
        ↓
Angular Router
        ↓
Route Match
        ↓
Guard Check
        ↓
Resolver Execution
        ↓
Component Creation
        ↓
Display in Router Outlet
```

---

# Common Router Directives

| Directive        | Purpose                  |
| ---------------- | ------------------------ |
| routerLink       | Navigate to route        |
| routerLinkActive | Highlight active link    |
| router-outlet    | Display routed component |

---

# routerLinkActive Example

```html
<a
 routerLink="/home"
 routerLinkActive="active">
 Home
</a>
```

---

# Best Practices

* Use lazy loading for large applications
* Protect secure pages with guards
* Use route parameters for dynamic pages
* Use resolvers for preloading data
* Create a 404 page using wildcard routes
* Organize routes by feature

---

# Interview Questions

### What is Angular Routing?

A mechanism for navigating between components in a Single Page Application.

### What is Router Outlet?

A placeholder where Angular loads routed components.

### Difference Between Route Parameter and Query Parameter?

Route Parameter:

```text
/user/100
```

Query Parameter:

```text
/ user?id=100
```

### What is Lazy Loading?

Loading modules only when required.

### What is Route Guard?

A feature used to control access to routes.

### What is ActivatedRoute?

A service used to access route information such as parameters and query parameters.

---

# Conclusion

Angular Routing is a powerful feature that enables navigation, URL management, lazy loading, route protection, and dynamic page rendering. It is an essential part of every Angular application and is widely used in enterprise-scale projects.
