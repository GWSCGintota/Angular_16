# Angular Service Hierarchical Levels

## Introduction

Angular uses a **Hierarchical Dependency Injection (DI)** system. This means services can be provided at different levels of the application, and their scope and lifetime depend on where they are provided.

The hierarchy looks like this:

```text
Root Injector
    ↓
Module Injector
    ↓
Component Injector
    ↓
Child Component Injector
