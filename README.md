# Case Study: Cloud Savings Dashboard

This is a case study in the implementation of a data visualization dashboard,
made as part of the application process to [north.cloud](https://north.cloud).

## Introduction

The dashboard is implemented using [SvelteKit](https://svelte.dev) with [Deno](https://deno.com) as the runtime.
In order to protect the upstream API, the API key is stored in an environment variable and the authenticated
interaction is performed only on the server by using a +page.server.ts file.

## Run the project

- Start a development server...
  ```bash
  deno task dev
  ```
- Create a production build...
  ```bash
  deno task build
  ```
- Preview a production build...
  ```bash
  deno task preview
  ```
- Start a production server...
  ```bash
  deno run -REN build/index.js
  ```
