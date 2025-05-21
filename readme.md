# Airbean API
Grupparbete restful api, databas och säkerhet. Ett api till en webbapp där man kan beställa kaffe.

Anton Benjamin Rebecca

[Uppgiftsinstruktioner](https://github.com/FJSX24/FJSX24-Backendutveckling-Vecka21/blob/main/README.md)

[docs/install.md](docs/install.md)

[ER-diagram](https://www.mermaidchart.com/app/projects/8d3bccf7-3223-494f-b65a-4375826aa78f/diagrams/6d6b48bc-fede-4b04-a20c-2878b13a947b/version/v0.1/edit)


## Installing

You need to run commands from two places:

`cd client && npm install
cd server && npm install`

## Running dev mode

You need to run commands from two places:

### Client:
`cd client && npm run dev`

### Server:
This will only show a static version of the client -- the latest build.
`cd server && npm run dev
`

## Build
To build the latest Vite for the static dist, accessed from server (e.g. localhost:3000)

`cd client && npm run build `



## Folder structure - To be updated

`server/
├── src/
│   ├── routes/
│   │   └── productRoutes.ts        <-- Defines HTTP routes & connects to controller functions
│   ├── controllers/
│   │   └── productController.ts    <-- Contains functions handling req/res logic
│   ├── services/  (or models/, or data-access/)
│   │   └── productService.ts       <-- Contains DB querying functions
│   ├── config/
│   ├── middlewares/
│   └── ...
`
