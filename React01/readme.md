Preqequisites: 
________________________________
 
- HTML
- CSS
- JS

- Type Script - super set of JS
--------------------------------
APP
    - NavBar
    - Aside
    - GameGrid
        - GameCard
        - LikeButton
--------------------------------
node 16 or higher is required for this react
- node -v 
    - v20.18.0
- npm create vite@4.1.0 
    - Need to install the following packages:
    - create-vite@4.1.0
    - Ok to proceed? (y) y
-  Project name: ... react-app
- Select a framework: » - Use arrow-keys. Return to submit.
>   Vanilla
    Vue
    React
    Preact
    - √ Select a framework: » React
- √ Select a variant: » TypeScript
-   Scaffolding project in C:\Users\HAI\Desktop\REACT\react-app...

    - Done. Now run:

    - cd react-app
    - npm install
    - npm run dev
- cd -react-app
- npm install / npm i
    - this is to install all the third party libraries into the project 
- npm run dev
_________________________________
- example.ts for plain typescript files
- example.tsx for React Components
---------------------------------
- to see how JSX code will converted into JS 
- we can see this at "babeljs.io/repl"
---------------------------------
- <example></example> or <emaple/> both gives same result
---------------------------------
- in terminal we can see this > 6:36:34 pm [vite] hmr update /src/App.tsx (x19)
    - here "hmr: hot module replacement"
    - here [vite] underhood monitor our files for changes, when ever they found any changes it will automatically refresh our page in the browser
---------------------------------
# React handles only UI
- Routing
- HTTP
- Managing app state
- Internationalization
- Form Validation
- Animation
## for aall these we have 3rd party libraries
-----------------------------------
- Building Components
- Rendering markup with jsx
- Managing state
- Passing input via props
- Debugging react apps
------------------------------------
Creating List Group Components: coe is from bootstrap list-group
- in terminal: react-app>npm i bootstrap@5.2.3
--------------------------------------
# naming Convention of components is "PascalCasing" - Capitalizing each word: "ListGroup.tsx"
_____________________________________
# ShortCuts
- ctrl +t for search in vs code
- ctrl + d for selecting/editing multiple class names at once
    - then press "esc" for desecting it.
- <></> or <Fragment></Fragment> 
- or goto view>commmand palette>wrap with abbriviation
- or goto view>commmand palette>format document
_____________________________________
# Rendering Lists
- array map method
- key should be included to each and every item