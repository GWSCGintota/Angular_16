# How to Create an Angular Project

## Prerequisites

Before creating an Angular project, ensure that Node.js and npm are installed on your system.

Check the installed versions:

```bash
node -v
npm -v
```

## Step 1: Install Angular CLI

Install Angular CLI globally using npm:

```bash
npm install -g @angular/cli
```

Verify the installation:

```bash
ng version
```

## Step 2: Create a New Angular Project

Run the following command to create a new Angular project:

```bash
ng new my-angular-app
```

During the setup, Angular CLI will ask:

* Would you like to add Angular routing? (Yes/No)
* Which stylesheet format would you like to use? (CSS, SCSS, Sass, Less, etc.)

## Step 3: Navigate to the Project Directory

```bash
cd my-angular-app
```

## Step 4: Run the Development Server

Start the Angular development server:

```bash
ng serve
```

Or open the application automatically in your browser:

```bash
ng serve --open
```

## Step 5: Access the Application

Open your browser and navigate to:

```text
http://localhost:4200
```

You should see the default Angular application running.

## Common Angular CLI Commands

### Generate a Component

```bash
ng generate component home
```

### Generate a Service

```bash
ng generate service services/user
```

### Generate a Module

```bash
ng generate module admin
```

### Build for Production

```bash
ng build --configuration production
```

## Create a Project with a Specific Angular Version

For example, to create an Angular 17 project:

```bash
npx @angular/cli@17 new my-angular-app
```

## Additional Resources

* Angular Documentation: https://angular.dev
* Node.js: https://nodejs.org

## Conclusion

Angular CLI simplifies project creation and development. After creating your project, you can start building components, services, modules, and other Angular features.
