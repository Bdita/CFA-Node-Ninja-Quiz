### Node Ninja Quiz
#### About Project
  A simple quiz app bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
  ![logo](http://res.cloudinary.com/dihqhbf9i/image/upload/v1495064879/Blackbird_rvfnin.png)

#### Design Process
* Ideation and Wireframes:
  ![wireframe](http://res.cloudinary.com/dihqhbf9i/image/upload/v1495249141/node_ninja_quiz_c37rry.png)

* Application Development:
  1. Creating a new application using React:
  ```
  $ npm install -g create-react-app
  $ create-react-app quiz
  $ cd quiz
  $ npm start or yarn start  //Yarn is now default in create-react-app.
  ```
  Create React App is an easy way to start building react application. It sets up the development environment quickly and installing or configuring tools like Webpack or Babel is not required. They are preconfigured and hidden so the sole focus is on the code.

  The app looks like this at the moment:
  ![wireframe](http://res.cloudinary.com/dihqhbf9i/image/upload/v1495243443/Screen_Shot_2017-05-20_at_11.22.21_am_qxvrm5.png)


  2. Building and styling components(App component, Question component, MultiChoice Component, ResultsComponent and ProgressBar Component): Each components and their respective css styling files are organised in one folder. The application is designed to be responsive in different screen sizes using react-bootstrap components.

  3. Testing:
  Create-react-app now ships with jest by default as its testing harness/framework!

  * Testing Components:
    Every components has a "smoke test" verifying that the component renders without throwing.

  * Testing resetting the state works using jest and shallow() rendering API from Enzyme:
    To get started with enzyme:
    ```
    npm i --save-dev enzyme or yarn add enzyme
    npm i --save-dev react-test-renderer or yarn add react-test-renderer
    ```
    Shallow rendering and use case code snippets:
    ```JavaScript
    import { shallow } from 'enzyme';
    ```
    ```JavaScript
    let component = shallow(<App />);    //inside test function
    ```
  4. Deployment:
    To be deployed...

#### Installation Instruction (To run the app locally)
#### Dependencies:
  react 15.5.4: React is a UI library used for the creation of interactive, stateful & reusable UI components. It uses a concept called virtual DOM. Virtual DOM allow us to improve front end performance by avoiding direct work with DOM.
  react-bootstrap 0.31.0: It is a library of reusable front-end components. Example of the components used in this project are Button, Col, Row and so on.
  bootstrap 3.3.7: React Bootstrap does not include Bootstrap CSS so this needs to be installed as well.
  react-dom 15.5.4: This package provides DOM specific methods. Eg.ReactDOM.render() is used to render the components in DOM.
  react-progressbar 1.4.6: Basis progress bar in React.js.

#### Requirements:
  * node - You’ll need to have Node >= 6 on your machine. Node is a server side JavaScript platform built on chrome v8 Javascript engine. It allows to write javascript based application that can be run outside of the browser. You’ll need it for running build tools like npm or a local development server.
  * npm (or yarn) - a package manager for javascript. It is used to install, share and distribute code and manage dependencies in projects.

#### Usage Instruction:
  First Clone the repository.
  ```
  $ cd repoName
  $ npm install or yarn install  //to install the dependencies in the local _modules folder
  $ npm start or yarn start  //to run the app in development mode. Open http://localhost:3000 to view it in the browser.
  $ npm test or yarn test  //to run the test watcher in an interactive mode.
  ```

#### Future of the project:
  - Gamification with different levels and rewards
  - Backend for creating and storing questions and answers
