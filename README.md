# Case Study: Cloud Savings Dashboard

This is a case study in the implementation of a data visualization dashboard,
made as part of the application process to [north.cloud](https://north.cloud).
A running instance of this project can be found at: [north.aidan.software](https://north.aidan.software)

## Introduction

The dashboard is implemented using [SvelteKit](https://svelte.dev) with
[Deno](https://deno.com) as the runtime. In order to protect the upstream API,
the API key is stored in an environment variable and the authenticated
interaction is performed server-side by using a +page.server.ts file and $lib/server/.

## Quickstart
The recommended way to run the project is with the prebuilt Docker image:
```bash
sudo docker run -it -p 3000:3000 -e NORTH_CASE_API_KEY=<YOUR API KEY> 2sday/north-case
```

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

## Considerations
- The nature of the data involved makes it unlikely to update during a user session. 
  For this reason, no update mechanism was implemented. If desired, the data could be loaded
  using client-side fetch calls to an API route eg. src/routes/api/data/+server.ts) with a GET
  handler that in turn server-side fetches from the upstream API to maintain security of the API key.
  With the additional of setInterval based polling on the client, this would enable the data to be
  automatically reloaded in the background. Note that the current approach loads the data with the
  initial request, resulting in reduced page load time.
