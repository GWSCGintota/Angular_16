# How to Create a Module and Routing File Using One Command

Angular CLI allows you to create a module and its routing file together using the `--routing` option.

## Command

```bash
ng generate module admin --routing
```

or the shorthand version:

```bash
ng g m admin --routing
```

---

## Generated Files

The above command creates:

```text
src/app/admin/
├── admin.module.ts
└── admin-routing.module.ts
```

---

## Example

Create a module named `user` with routing:

```bash
ng g m user --routing
```

Generated files:

```text
src/app/user/
├── user.module.ts
└── user-routing.module.ts
```

---

## Generated Module File

### user.module.ts

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
```

---

## Generated Routing File

### user-routing.module.ts

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
```

---

## Create Module in a Specific Folder

```bash
ng g m modules/admin --routing
```

Generated structure:

```text
src/app/modules/admin/
├── admin.module.ts
└── admin-routing.module.ts
```

---

## Common Commands

### Create Module Only

```bash
ng g m admin
```

### Create Module with Routing

```bash
ng g m admin --routing
```

### Create Lazy Loaded Module

```bash
ng g m admin --routing
ng g c admin/dashboard
```

---

## Summary

| Command                          | Description                                |
| -------------------------------- | ------------------------------------------ |
| `ng g m admin`                   | Create module only                         |
| `ng g m admin --routing`         | Create module and routing file             |
| `ng g m modules/admin --routing` | Create module with routing inside a folder |

The most commonly used command is:

```bash
ng g m admin --routing
```

This creates both `admin.module.ts` and `admin-routing.module.ts` in a single command.
