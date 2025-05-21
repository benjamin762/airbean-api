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

```bash
.
├── client/                         # Frontend (React + Vite)
│   ├── eslint.config.js           # ESLint config for frontend linting
│   ├── index.html                 # Entry HTML file for Vite to mount the app
│   ├── package-lock.json          # Exact dependency tree for reproducible builds
│   ├── package.json               # Frontend project metadata and dependencies
│   ├── public/
│   │   └── vite.svg               # Static assets available to the browser
│   ├── README.md                  # Frontend-specific readme or instructions
│   ├── src/                       # Source code for the frontend
│   │   ├── App.css                # Styles for the main App component
│   │   ├── App.tsx                # Main React App component
│   │   ├── assets/                # Images, fonts, or other static files
│   │   ├── components/            # Reusable UI components (e.g., buttons, forms)
│   │   ├── index.css              # Global styles
│   │   ├── main.tsx               # Entry point for React + rendering
│   │   ├── services/              # API interaction (e.g., fetch products/orders)
│   │   └── vite-env.d.ts          # Type definitions for Vite env variables
│   ├── tsconfig.json              # TypeScript config for the frontend
│   └── vite.config.ts             # Vite-specific build and dev server config

├── docs/                          # Documentation and setup guides
│   ├── install.md                 # Installation instructions
│   └── länkar.txt                 # Saved useful links or resources

├── eslint.config.js              # Global ESLint configuration (maybe shared)
├── jest.config.js               # Jest testing configuration

├── readme.md                     # Main project readme

├── server/                       # Backend (Node.js + Express + TypeScript)
│   ├── package-lock.json          # Backend dependency lockfile
│   ├── package.json               # Backend dependencies and scripts
│   ├── src/                       # Backend source code
│   │   ├── app.ts                 # Express app setup (middleware, routes)
│   │   ├── config/                # Configuration (e.g., database connection)
│   │   ├── controllers/           # Route handler functions (e.g., business logic)
│   │   ├── middlewares/          # Custom middleware (e.g., error handling)
│   │   ├── models/                # Data models or DB schema helpers
│   │   ├── routes/                # Express route definitions (e.g., /products)
│   │   ├── server.ts              # Server entry point (listen on port, etc.)
│   │   └── services/              # Logic for querying the DB or external APIs
│   └── tsconfig.json              # TypeScript config for backend

├── shared/                       # Shared types/interfaces between front and back
│   ├── order.ts                   # Type definitions for Order
│   ├── product.ts                 # Type definitions for Product
│   └── tsconfig.json              # TypeScript config for shared module

├── tests/                        # Unit and integration tests
│   └── itemController.test.ts     # Example test for the item controller

└── tsconfig.json                 # Root TypeScript config (may reference others)

```
