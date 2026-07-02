# Best Folder Structure for an Angular Project

> **Recommended style:** Modern Angular with standalone components, feature-based organization, lazy-loaded routes, and clear separation between `core`, `shared`, `features`, `layouts`, `assets`, and `environments`.

---

## Table of Contents

1. [Goal of a Good Angular Folder Structure](#1-goal-of-a-good-angular-folder-structure)
2. [Recommended Folder Structure](#2-recommended-folder-structure)
3. [Root-Level Files](#3-root-level-files)
4. [`src` Folder](#4-src-folder)
5. [`app` Folder](#5-app-folder)
6. [`core` Folder](#6-core-folder)
7. [`shared` Folder](#7-shared-folder)
8. [`features` Folder](#8-features-folder)
9. [`layouts` Folder](#9-layouts-folder)
10. [Feature Routing](#10-feature-routing)
11. [`models` and `interfaces`](#11-models-and-interfaces)
12. [`services`](#12-services)
13. [`guards`](#13-guards)
14. [`interceptors`](#14-interceptors)
15. [`pipes`](#15-pipes)
16. [`directives`](#16-directives)
17. [`assets`](#17-assets)
18. [`environments`](#18-environments)
19. [Small Project Structure](#19-small-project-structure)
20. [Medium Project Structure](#20-medium-project-structure)
21. [Large Enterprise Project Structure](#21-large-enterprise-project-structure)
22. [Naming Conventions](#22-naming-conventions)
23. [Best Practices](#23-best-practices)
24. [Common Mistakes](#24-common-mistakes)
25. [Final Recommended Structure](#25-final-recommended-structure)

---

# 1. Goal of a Good Angular Folder Structure

A good Angular folder structure should make the project:

- Easy to understand
- Easy to scale
- Easy to test
- Easy to maintain
- Easy for a team to work on
- Clear about where each file belongs

Angular applications can become difficult to maintain when all files are placed directly inside one folder. A better approach is to organize the application by responsibility and by feature.

---

## Main principle

Use a **feature-based structure**.

That means files related to a feature should stay close together.

Example:

```text
features/
└── products/
    ├── pages/
    ├── components/
    ├── services/
    ├── models/
    └── products.routes.ts
```

This is better than placing all components, all services, and all models in separate global folders when the application becomes large.

---

# 2. Recommended Folder Structure

This is a good general-purpose Angular project structure:

```text
my-angular-app/
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── README.md
├── public/
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.scss
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   └── fonts/
    ├── environments/
    │   ├── environment.ts
    │   ├── environment.development.ts
    │   └── environment.production.ts
    └── app/
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.scss
        ├── app.config.ts
        ├── app.routes.ts
        ├── core/
        │   ├── constants/
        │   ├── guards/
        │   ├── interceptors/
        │   ├── services/
        │   └── utils/
        ├── shared/
        │   ├── components/
        │   ├── directives/
        │   ├── pipes/
        │   └── validators/
        ├── layouts/
        │   ├── auth-layout/
        │   └── main-layout/
        └── features/
            ├── auth/
            │   ├── pages/
            │   ├── components/
            │   ├── services/
            │   ├── models/
            │   └── auth.routes.ts
            ├── dashboard/
            │   ├── pages/
            │   ├── components/
            │   └── dashboard.routes.ts
            ├── products/
            │   ├── pages/
            │   ├── components/
            │   ├── services/
            │   ├── models/
            │   └── products.routes.ts
            └── orders/
                ├── pages/
                ├── components/
                ├── services/
                ├── models/
                └── orders.routes.ts
```

---

# 3. Root-Level Files

The root folder contains project configuration files.

```text
my-angular-app/
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── src/
```

| File | Purpose |
|---|---|
| `angular.json` | Angular CLI workspace and build configuration |
| `package.json` | Dependencies and npm scripts |
| `package-lock.json` | Exact installed dependency versions |
| `tsconfig.json` | TypeScript configuration |
| `README.md` | Project instructions |
| `.gitignore` | Files ignored by Git |

Example `package.json` scripts:

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint"
  }
}
```

---

# 4. `src` Folder

The `src` folder contains the actual application source code.

```text
src/
├── index.html
├── main.ts
├── styles.scss
├── assets/
├── environments/
└── app/
```

| File | Purpose |
|---|---|
| `index.html` | Main HTML page loaded by the browser |
| `main.ts` | Application bootstrap file |
| `styles.scss` | Global styles |
| `assets/` | Static files such as images and icons |
| `environments/` | Environment-specific configuration |
| `app/` | Main Angular application code |

---

# 5. `app` Folder

The `app` folder contains the main Angular application.

```text
app/
├── app.component.ts
├── app.component.html
├── app.component.scss
├── app.config.ts
├── app.routes.ts
├── core/
├── shared/
├── layouts/
└── features/
```

| File | Purpose |
|---|---|
| `app.component.ts` | Root component |
| `app.component.html` | Root component template |
| `app.component.scss` | Root component styles |
| `app.config.ts` | Application-level providers |
| `app.routes.ts` | Root application routes |

Example `app.routes.ts`:

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes')
        .then(m => m.PRODUCTS_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  }
];
```

---

# 6. `core` Folder

The `core` folder contains application-wide singleton services and configuration.

```text
core/
├── constants/
├── guards/
├── interceptors/
├── services/
└── utils/
```

Examples:

```text
core/
├── constants/
│   └── api-endpoints.ts
├── guards/
│   └── auth.guard.ts
├── interceptors/
│   └── auth.interceptor.ts
├── services/
│   ├── auth.service.ts
│   ├── token.service.ts
│   └── notification.service.ts
└── utils/
    └── date-utils.ts
```

## What belongs in `core`?

- Authentication service
- Token service
- Global error handler
- HTTP interceptors
- Route guards
- App-wide constants
- Logging service
- Notification service
- Utilities used across many features

## What should not go in `core`?

Do not put feature-specific files in `core`.

Bad:

```text
core/
└── product.service.ts
```

Better:

```text
features/
└── products/
    └── services/
        └── product.service.ts
```

---

# 7. `shared` Folder

The `shared` folder contains reusable UI and helper code used by multiple features.

```text
shared/
├── components/
├── directives/
├── pipes/
└── validators/
```

Examples:

```text
shared/
├── components/
│   ├── button/
│   ├── modal/
│   ├── loading-spinner/
│   └── confirmation-dialog/
├── directives/
│   └── autofocus.directive.ts
├── pipes/
│   └── currency-format.pipe.ts
└── validators/
    └── password-match.validator.ts
```

## What belongs in `shared`?

- Reusable buttons
- Modals
- Tables
- Loading spinners
- Pipes
- Directives
- Form validators
- Small UI utilities

A file should be placed in `shared` only if it is used by more than one feature or is clearly reusable.

---

# 8. `features` Folder

The `features` folder contains business features of the application.

```text
features/
├── auth/
├── dashboard/
├── products/
├── orders/
└── users/
```

Each feature should contain its own pages, components, services, models, and routes.

Example product feature:

```text
features/
└── products/
    ├── pages/
    │   ├── product-list-page/
    │   │   ├── product-list-page.component.ts
    │   │   ├── product-list-page.component.html
    │   │   └── product-list-page.component.scss
    │   └── product-details-page/
    │       ├── product-details-page.component.ts
    │       ├── product-details-page.component.html
    │       └── product-details-page.component.scss
    ├── components/
    │   ├── product-card/
    │   └── product-filter/
    ├── services/
    │   └── product.service.ts
    ├── models/
    │   └── product.model.ts
    └── products.routes.ts
```

## Why feature folders are good

- Related files stay together
- Features can be lazy-loaded
- Teams can work on different areas
- Code is easier to find
- Large applications stay organized
- Feature code is easier to remove or refactor

---

# 9. `layouts` Folder

The `layouts` folder contains page layouts used by route groups.

```text
layouts/
├── auth-layout/
└── main-layout/
```

Example:

```text
layouts/
├── auth-layout/
│   ├── auth-layout.component.ts
│   ├── auth-layout.component.html
│   └── auth-layout.component.scss
└── main-layout/
    ├── main-layout.component.ts
    ├── main-layout.component.html
    └── main-layout.component.scss
```

## Auth layout

Used for:

- Login
- Register
- Forgot password

```html
<section class="auth-layout">
  <router-outlet></router-outlet>
</section>
```

## Main layout

Used for:

- Dashboard
- Products
- Orders
- Users

```html
<app-sidebar></app-sidebar>

<main>
  <app-header></app-header>
  <router-outlet></router-outlet>
</main>
```

---

# 10. Feature Routing

Modern Angular applications commonly use route files instead of very large routing modules.

```text
features/
└── products/
    └── products.routes.ts
```

Example `products.routes.ts`:

```ts
import { Routes } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductListPageComponent
  },
  {
    path: ':id',
    component: ProductDetailsPageComponent
  }
];
```

Lazy loading in `app.routes.ts`:

```ts
export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes')
        .then(m => m.PRODUCTS_ROUTES)
  }
];
```

Lazy loading helps reduce the initial bundle size.

---

# 11. `models` and `interfaces`

Models define the shape of data.

```text
features/
└── products/
    └── models/
        ├── product.model.ts
        └── create-product-request.model.ts
```

Example model:

```ts
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  categoryId: number;
}
```

Request model:

```ts
export interface CreateProductRequest {
  name: string;
  price: number;
  stock: number;
  categoryId: number;
}
```

Response model:

```ts
export interface ProductResponse {
  id: number;
  name: string;
  price: number;
  stock: number;
  categoryName: string;
}
```

Use clear names:

```text
product.model.ts
create-product-request.model.ts
product-response.model.ts
```

Avoid unclear names:

```text
data.ts
types.ts
common.ts
```

---

# 12. `services`

Services contain business logic, API calls, and reusable operations.

```text
features/
└── products/
    └── services/
        └── product.service.ts
```

Example service:

```ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
```

Service placement rule:

| Service Type | Location |
|---|---|
| Used across whole app | `core/services/` |
| Used only in one feature | `features/<feature>/services/` |
| Reusable utility logic | `shared/` or `core/utils/` |

---

# 13. `guards`

Guards protect routes.

```text
core/
└── guards/
    ├── auth.guard.ts
    └── role.guard.ts
```

Example auth guard:

```ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/auth/login']);
};
```

Use in routes:

```ts
export const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
  }
];
```

---

# 14. `interceptors`

Interceptors handle HTTP requests and responses globally.

```text
core/
└── interceptors/
    ├── auth.interceptor.ts
    └── error.interceptor.ts
```

Example auth interceptor:

```ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();

  if (!token) {
    return next(req);
  }

  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authRequest);
};
```

Register in `app.config.ts`:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
```

---

# 15. `pipes`

Pipes transform data for display.

```text
shared/
└── pipes/
    └── short-text.pipe.ts
```

Example pipe:

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
  standalone: true
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string, limit = 30): string {
    if (!value) {
      return '';
    }

    return value.length > limit
      ? value.substring(0, limit) + '...'
      : value;
  }
}
```

Use in template:

```html
<p>{{ product.description | shortText:50 }}</p>
```

---

# 16. `directives`

Directives add behaviour to elements.

```text
shared/
└── directives/
    └── autofocus.directive.ts
```

Example directive:

```ts
import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutofocusDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
```

Use:

```html
<input appAutofocus />
```

---

# 17. `assets`

The `assets` folder stores static files.

```text
assets/
├── images/
├── icons/
├── fonts/
└── data/
```

Examples:

```text
assets/images/logo.png
assets/icons/menu.svg
assets/fonts/inter.woff2
```

Use in template:

```html
<img src="assets/images/logo.png" alt="Company logo" />
```

Put these in `assets`:

- Images
- Icons
- Fonts
- Static JSON files
- Public static files needed by the application

Do not put TypeScript application logic inside `assets`.

---

# 18. `environments`

Environment files store build-time configuration.

```text
environments/
├── environment.ts
├── environment.development.ts
└── environment.production.ts
```

Example:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

Production:

```ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com'
};
```

Use:

```ts
import { environment } from '../../../environments/environment';

console.log(environment.apiUrl);
```

## Important warning

Do not store secrets in Angular environment files.

Angular runs in the browser. Anything included in the frontend build can be seen by users.

Do not store:

- Database passwords
- Private API keys
- JWT signing secrets
- Payment secrets
- Backend credentials

Keep secrets on the backend.

---

# 19. Small Project Structure

For a small Angular project, keep it simple.

```text
src/
└── app/
    ├── app.component.ts
    ├── app.config.ts
    ├── app.routes.ts
    ├── components/
    ├── pages/
    └── services/
```

Use this when:

- The app has only a few pages
- There are no large business features
- One or two developers work on it
- The project is for learning or a simple dashboard

Do not over-engineer small projects.

---

# 20. Medium Project Structure

For a medium project, use feature folders.

```text
src/
└── app/
    ├── core/
    ├── shared/
    ├── layouts/
    └── features/
        ├── auth/
        ├── dashboard/
        ├── products/
        └── orders/
```

Use this when:

- The app has multiple business areas
- Different pages need separate services
- Lazy loading is useful
- More than one developer works on the project

This is the recommended structure for most real Angular applications.

---

# 21. Large Enterprise Project Structure

For a large application or monorepo, consider domain libraries.

```text
workspace/
├── apps/
│   ├── admin-app/
│   └── customer-app/
├── libs/
│   ├── shared-ui/
│   ├── shared-data-access/
│   ├── auth/
│   ├── products/
│   └── orders/
└── tools/
```

This type of structure is common when:

- Multiple apps share code
- Many developers work on the project
- Features are owned by separate teams
- Shared UI libraries are needed
- CI/CD and testing need strong boundaries

Tools such as Nx can help manage Angular monorepos, but they are not required for every project.

---

# 22. Naming Conventions

## Components

```text
product-card.component.ts
product-card.component.html
product-card.component.scss
```

Class:

```ts
export class ProductCardComponent {
}
```

## Services

```text
product.service.ts
auth.service.ts
token.service.ts
```

Class:

```ts
export class ProductService {
}
```

## Guards

```text
auth.guard.ts
role.guard.ts
```

Function:

```ts
export const authGuard: CanActivateFn = () => {
  return true;
};
```

## Interceptors

```text
auth.interceptor.ts
error.interceptor.ts
```

Function:

```ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
```

## Models

```text
product.model.ts
create-product-request.model.ts
user-profile.model.ts
```

---

# 23. Best Practices

## 23.1 Use feature-based organization

Good:

```text
features/products/
features/orders/
features/users/
```

Avoid placing all files only by type in large applications:

```text
components/
services/
models/
pages/
```

Type-based folders become hard to navigate as the project grows.

---

## 23.2 Keep components small

A component should have one main responsibility.

Bad:

```text
dashboard.component.ts
```

containing:

- Charts
- Tables
- User profile
- Notifications
- API calls
- Filtering logic
- Export logic

Better:

```text
dashboard/
├── pages/
│   └── dashboard-page/
└── components/
    ├── sales-chart/
    ├── recent-orders/
    └── notification-panel/
```

---

## 23.3 Keep API calls in services

Bad:

```ts
export class ProductListComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/products').subscribe();
  }
}
```

Better:

```ts
export class ProductListComponent {
  private readonly productService = inject(ProductService);

  products$ = this.productService.getProducts();
}
```

---

## 23.4 Use lazy loading

Lazy-load feature routes where possible.

```ts
{
  path: 'orders',
  loadChildren: () =>
    import('./features/orders/orders.routes')
      .then(m => m.ORDERS_ROUTES)
}
```

Benefits:

- Smaller initial bundle
- Faster first load
- Better feature separation

---

## 23.5 Keep shared truly shared

Do not place a component in `shared` just because you might use it later.

Move it to `shared` only when it is actually reusable.

---

## 23.6 Avoid circular dependencies

Bad:

```text
products imports orders
orders imports products
```

Better:

```text
products -> shared
orders -> shared
```

Common reusable logic should move into `shared` or `core`.

---

## 23.7 Use clear route-level pages

Use `pages/` for route-level components.

Example:

```text
features/products/pages/product-list-page/
features/products/pages/product-details-page/
```

Use `components/` for smaller UI parts used inside pages.

---

# 24. Common Mistakes

## Mistake 1: Putting everything in `app`

Bad:

```text
app/
├── product.component.ts
├── order.component.ts
├── user.component.ts
├── product.service.ts
├── order.service.ts
└── user.service.ts
```

Better:

```text
app/features/products/
app/features/orders/
app/features/users/
```

---

## Mistake 2: Making `shared` a dumping ground

Bad:

```text
shared/
├── product.service.ts
├── checkout-page.component.ts
├── user-profile-page.component.ts
└── order-api.service.ts
```

Better:

```text
features/products/
features/checkout/
features/users/
features/orders/
```

---

## Mistake 3: Storing secrets in environment files

Bad:

```ts
export const environment = {
  apiSecret: 'my-secret-key'
};
```

Better:

```text
Keep secrets on the backend.
Frontend apps are visible to users.
```

---

## Mistake 4: Not separating pages and components

Bad:

```text
products/
├── product-list.component.ts
├── product-card.component.ts
├── product-filter.component.ts
```

Better:

```text
products/
├── pages/
│   └── product-list-page/
└── components/
    ├── product-card/
    └── product-filter/
```

---

## Mistake 5: Creating too many folders too early

For a very small app, this may be too much:

```text
core/
shared/
layouts/
features/
data-access/
ui/
utils/
```

Start simple and add structure when the project grows.

---

# 25. Final Recommended Structure

For most real Angular projects, this is the best balanced structure:

```text
src/
├── index.html
├── main.ts
├── styles.scss
├── assets/
├── environments/
└── app/
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.scss
    ├── app.config.ts
    ├── app.routes.ts
    ├── core/
    │   ├── constants/
    │   ├── guards/
    │   ├── interceptors/
    │   ├── services/
    │   └── utils/
    ├── shared/
    │   ├── components/
    │   ├── directives/
    │   ├── pipes/
    │   └── validators/
    ├── layouts/
    │   ├── auth-layout/
    │   └── main-layout/
    └── features/
        ├── auth/
        │   ├── pages/
        │   ├── components/
        │   ├── services/
        │   ├── models/
        │   └── auth.routes.ts
        ├── dashboard/
        │   ├── pages/
        │   ├── components/
        │   └── dashboard.routes.ts
        ├── products/
        │   ├── pages/
        │   ├── components/
        │   ├── services/
        │   ├── models/
        │   └── products.routes.ts
        └── orders/
            ├── pages/
            ├── components/
            ├── services/
            ├── models/
            └── orders.routes.ts
```

---

## Final Advice

Use this simple rule:

```text
core     = app-wide singleton services and configuration
shared   = reusable UI, pipes, directives, validators
features = business features
layouts  = page shells and route layouts
assets   = static files
```

For small projects, keep the structure simple.

For medium and large projects, use feature folders and lazy-loaded routes.

The best Angular folder structure is not the one with the most folders. It is the one where every developer can quickly answer:

```text
Where should this file go?
Where can I find this feature?
Can this code be reused?
Is this app easy to scale?
```

---

## Official References

- [Angular Workspace and Project File Structure](https://angular.dev/reference/configs/file-structure)
- [Angular Coding Style Guide](https://angular.dev/style-guide)
- [Angular Components Guide](https://angular.dev/guide/components)
- [Angular Services Guide](https://angular.dev/guide/di/creating-and-using-services)
- [Angular Build Environments](https://angular.dev/tools/cli/environments)
- [Angular Workspace Configuration](https://angular.dev/reference/configs/workspace-config)
