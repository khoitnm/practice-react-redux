# Overview
This project will help us to save our document.

## Build & Start application
Build project:
`npm install`

Compile ts script:
`tsc`

Starting the application:
`npm run server` (run with typescript)
`npm run start:webpack` (run with webpack - doesn't work yet)
`npm start` (run with javascript - deprecated - replaced by javascript)

## Trigger API requests
After starting the application, you can trigger the API by using links provided in the console log (e.g. `http://localhost:4000/...`).

# Add some new supporting command line
- `npm run clean`: remove all `node_modules` from all submodules.
- `npm test`: for testing

# Project structure
- /server <-- for backend
- /public <-- public file for the backend (should we move it into /server???)  
- /client <-- for frontend
- tsconfig-base.json (base configuration for TypeScript compiling)

# Configure IDE
- `Settings/Preferences` | `Languages and Frameworks` | `JavaScript` | `Code Quality Tools` | `ESLint`, and select `Automatic ESLint configuration`.

# References
## Project Structure
- Webpack vs. Express (Dev Server and Prod Server): https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
- More new information about Servers: https://medium.com/@jeffrey.allen.lewis/development-servers-compared-webpack-dev-server-vs-webpack-serve-no-its-not-missing-an-r-745fc5f78c0a
  (Express server is abandoned for Koa - webpack-dev-server vs. webpack-serve)
- Fullstack Typescript, ReactJS + Express: (backend and frontend are on the folder hierarchy - but still deployed to the same app???)
    - It looks like in `dev`, FE & BE runs on different ports; but on `Production`, they are the same app?!
        - The FE & BE structure is not clearly separated 
        - Support Express Routing with OvernightJS (*)
        - The source code is pretty old (2018) and hasn't updated yet recently.
    - Tutorial: https://levelup.gitconnected.com/setting-up-a-full-stack-typescript-application-featuring-express-and-react-ccfe07f2ea47
    - Sourcecode: https://github.com/seanpmaxwell/TypeScriptFullStackShell
    
- Fullstack Typescript, ReactJS + Express: (backend and frontend are diff apps - applying ***):
    - Tutorial: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/
      - Start both BE & FE on dev in one terminal by using Concurrent: https://itnext.io/4-solutions-to-run-multiple-node-js-or-npm-commands-simultaneously-9edaa6215a93
    - Sourcecode: https://github.com/ibrahima92/fullstack-typescript-mern-todo
- Fullstack Typescript, ReactJS + NestJS: (different apps for backend and frontend - quite strictly, don't prefer it)
    - Tutorial: https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-1/
    - Sourcecode: https://github.com/auth0-blog/nest-react-blog-ga
- Fullstack Typescript, ReactJS + Express (run on the same server - a very simple configuration for backend):
    - Tutorial: https://medium.com/codeduck/a-real-world-project-typescript-express-and-react-4701c0458e9c
    - Sourcecode: https://github.com/Dirk94/express-react-app
    
- Share code for BE & FE: 
    - https://stackoverflow.com/questions/59571680/react-backend-project-structure-when-sharing-code
    - https://stackoverflow.com/questions/25524206/setup-a-typescript-project-with-classes-shared-between-client-and-server-apps

## Checkstyle & Formatting
- ESLint vs. TSLint: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
  TSLint is a linter that can only be used for TypeScript, while ESLint supports both JavaScript and TypeScript.
  In the TypeScript 2019 Roadmap, the TypeScript core team explains that ESLint has a more performant architecture than TSLint and that they will only be focusing on ESLint when providing editor linting integration for TypeScript.

## Backend ------------------------------
### REST API
- TypeScript + Express: https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1
- https://www.npmjs.com/package/typescript-rest vs. https://www.npmjs.com/package/@overnightjs/core
- Note: Looks like typescript-rest doesn't work well with express-pino log.

### Logging (only for Backend)
- Pino: https://www.twilio.com/blog/guide-node-js-logging

## FrontEnd ------------------------------
### UI Styles
- Boostrap vs. Material-UI: https://flatlogic.com/blog/bootstrap-vs-material-ui-which-one-to-use-for-the-next-web-app
- @material-ui: https://material-ui.com/getting-started/usage/

### Routing
- Multiple pages ReactJS (Starter Guideline): https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html
- React Router - A Complete Guide: https://www.sitepoint.com/react-router-complete-guide/

### Redux
- Including: TypeScript, React, Redux, Redux-Thunk
    - Tutorial: https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
    - SourceCode: https://codesandbox.io/s/react-redux-typescript-oc4hi?file=/src/App.tsx
- Good concept explanation: https://medium.com/@konstankino/2019-redux-and-redux-thunk-for-reactjs-explained-e249b70d6188
    - "Since most of the events (or actions) within nearly all ReactJS applications happen asynchronously, 
      to avoid race conditions, we need a robust mechanism, and Redux-Thunk is yet another synchronization tool.
      Here is an example. 
      Let’s assume you want to fetch data sequentially as part of your App logic. 
      In request “A”, you fetch from the back end API user profile information, 
      and then in request “B” by the CompanyID that came in the payload of the request “A”, 
      you want to fetch details about the company. Since both requests are asynchronous, 
      request “B” may start and finish before request “A” completes. 
      Put simply, we have a few concurrent requests (because of the asynchronous nature of the environment in which our code executes),
      and so our code is prone to race condition bugs unless we explicitly control the order of each action’s execution. 
      Redux-Thunk does that for us; it helps us to mitigate those issues and avoid data race conditions."
- Good flow explanation:
    - Rematch: A very good document to explain from the concept to real code: https://hackernoon.com/redesigning-redux-b2baee8b8a38 (*)
      The diagram in this document is much easier to understand.
      - UI action 
        -> dispatcher 
        -> middleware (orchestration the actions from UI) 
        -> reducer (process actions to update new data to state)
        -> state
        -> subscriptions (broadcast new state to UI components)
    - An alternative to Rematch is Redux Toolkit which is an official redux project: 
      - Discussion: https://github.com/rematch/rematch/issues/735
      - Redux Toolkit guideline: https://redux-toolkit.js.org/introduction/quick-start (***)
    - https://dev.to/hadrianhughes/bulletproof-react-understanding-the-functional-reactive-approach-33kd

- Use "React Context + Hooks" instead of Redux: https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
    - Counter opinion (in comment of 'Andrew'): "The global / lifted up state with useContext + useState/useReduce combo is possible way, but be aware about the performance problems – the whole app (down from provider lever) is re-rendered on every state change. Have a look into Hookstate – supercharged useState which allows to lift the state up to global space, is as simple as useState itself and has got incredible performance – https://github.com/avkonst/hookstate (disclaimer: I am a maintainer)"
    - That counter opinion leads to practice: "“local (more isolated) variable is better than global (more accessible)”. Applying it to react state, the most local is per component state."
    - Because of that, it comes back to the needs of Redux!!!
    
- Best Practices:
    - https://slashgear.github.io/react-redux-pitfalls-and-best-pratices/#prefix-the-name-of-your-actions
### Generate sourcemap without eject
- https://stackoverflow.com/questions/43841807/how-to-enable-source-maps-in-create-react-app/45398725