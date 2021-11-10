TS Game (Drag & Drop)

===> Still on development process... <===

Technologies:

- JavaScript (React)
- Typescript
- Redux Toolkit

Commands have been used:

- yarn create react-app . --template typescript
- yarn add typescript
- npm i --save-dev "@types/react-dom"

- yarn add @reduxjs/toolkit
- yarn add react-redux

- npm install gh-pages --save

- npm run deploy (for publishing in Github Pages, but need to wait some time for updates come into force)

Additional Actions:

- "manually created in root directory .prettierrc.json file with configuration for Prettier Extension"
- "enabled Auto-Save" in VSCode
- "for github Pages enabled option on github repository (gh-pages) for it, then updated package.json":
  "homepage": "https://juandrepanther.github.io/TS-Game/",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"

REMARKS:

- latest react-router-dom does not support Switch and component attribute. Must be:
  import { BrowserRouter, Route, Routes } from "react-router-dom",
  <Route path="/DragElements" element={<Game />} />
- for redirect useNavigate hook from 'react-router-dom'
