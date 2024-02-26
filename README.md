# react-entrerprise-starterkit
The modular architecture approach serves as a skeleton for enterprise projects. It might be useful for beginners or educational purposes as well as for quick start developing new project.

## How do I start my React enterprise application?
**What frameworks, libraries should I use and what architecture to choose?** <br/>
Well, React doesn’t force you to use predefined patterns\frameworks or libraries. Unlike Angular, ReactJS is not a framework and you have pretty much a lot of freedom here, which is not always good.<br/>
According to the [official documentation](https://react.dev/learn/start-a-new-react-project) it is better to start with one of the frameworks:

* **Next.js**: offers SSR and therefore good performance and SEO
* **Remix**: full stack framework with nested routing, is a good choice - it combines frontend and backend into a single application. You don’t need a dedicated backend team as the whole application leverages the same technologies.
* **Gatsby**: SEO first framework, reach plugin ecosystem ideally for CMS systems.

Each framework listed above has pros and cons, but probably none of them meets your requirements. Should you start with scratch? Not really, let's go through all the steps and build a boilerplate for an enterprise application.

---
### Build tool and development experience
At this moment CRA is deprecated and you should definitely consider to leverage Vite. In enterprise applications we don't need SEO in most cases, therefore missing SSR wouldn't be a problem, but we should keep in mind browser compatibility. ESLint and Prettier for better development experience, as well as typescript plugin for css modules we have to include. Of course Typescript is a standard for big projects.
### Forms and localisation
Formik and yup are good choise to work with forms in React. For internalization we choose  i18next framework, along with flexible configuration and ability to get the localization dictionaries from backend, which would be our case. It is supposed to have common dictionaries for backend and frontend.
### State management
Zustand and immer - data store library significantly easier to use than Redux/MobX/other old data store libraries. It provides better developer experience and performance.
### Auth
We use authentication cookies. Our application should do polling for notifications, therefore token invalidation is not an issue. On the other hand we will get better experience with files operations such as upload\download\preview.
### Styling and component library
Material UI allows you to avoid use css in many cases, it uses EmotionJS for styling under the hood.
### Testing tools
Storybook for easier testing and interation on components. Testing framework - Jest. Visual regression testing tool for Storybook - Loki. All tests must be located in the same folder as the component\tool\lib.
### Naming convention
All folders and files names, except tsx components, should start with lower case. <br/> i18 translation keys we use pattern "module_compnent_key_name" where "module" - is a logical domain in terms of application, for example "admin", "user" or "dashboard", if it is generic might be "{label | warning | error}_key_name" or "{page\component name}_key_name" name from shared module. All imports must be absolute, if components are not nested, otherwise must be relative.
### Folder structure
* app - contains application itself
* assets - contains common styles, images, icons
#### app folder
Apart of the entrypoint component contains a routing component - defines general routing for common pages such as login or not found page. Each module should export theirself routing component (using lazy loading).
#### Application structure
Each module represents particular domain (except shared module) of application and must export routing for the module, optionally folders such as **pages**, **components**, **state**, **types**, **lib** or **api**. For example app folder structure might looks like:
* admin
* dashboard
* shared

A module cannot import components from another module, except from shared module.

Each module name (except shared module) must have the same name in routing, i e /admin or /user and must be exported as lazy routing component
Let's go down to the modules:<br/>
* **components**: contains shared UI components or widgets within the module, except shared module. A folder might include another **components**, **api**, **lib**, **types**. index file must export only "main" component in case of UI components.
* **pages** Each folder represents a page, among them must be the home page for the module (except shared module). Page folder might contain the same set of folders like component folder plus optionally **pages** for nested pages. index file must export the page itself and all nested pages as well (public API).
* other folders such **api** or **types** don't require additional explanations.