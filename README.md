# Case Study: Cloud Savings Dashboard

This is a case study in the implementation of a data visualization dashboard,
made as part of the application process to [north.cloud](https://north.cloud).

## Introduction

The dashboard is implemented using [SvelteKit](https://svelte.dev) with
[Deno](https://deno.com) as the runtime. In order to protect the upstream API,
the API key is stored in an environment variable and the authenticated
interaction is performed only on the server by using a +page.server.ts file.

## Quickstart
The recommended way to run the project is with the prebuilt Docker image:
```bash
sudo docker run -it 2sday/north-case -e NORTH_CASE_API_KEY=<YOUR API KEY>
````



## Installation
- Install [Deno](https://docs.deno.com/runtime/getting_started/installation/)
- In a terminal, run `deno install`
- Configure your API key by running `cp sample.env .env`
and then editing the API key placeholder in `.env`. The environment variable
 can also be set by running `export NORTH_CASE_API_KEY="<YOUR API KEY>"`
or any other method.
- If you want to...
  - ... start a development server, run:
    ```bash
    deno task dev
    ```
  - ... create a production build, run:
    ```bash
    deno task build
    ```
  - ... preview a production build, run:
    ```bash
    deno task preview
    ```
  - ... start a production server, run:
    ```bash
    deno run -REN build/index.js
    ```
