# Hermes

Prototype for PWA IDE for websites / PWAs

## Project Goals

The goal of this project is to allow development for the web, on the web.

### What does that mean?

That means that a user should be able to navigate to the project website (or install the PWA) and create a website or PWA using nothing more than the web browser. The code editing could be done from the browser, the building could be done from the browser, and running the service could be done from the browser.

Currently the vast majority of the development for the web has to occur on a Windows, Mac, or Linux PC. This is because the tooling required can only be run as desktop applications and services. Right now if I get a new computer I can't do any development on it until I set it up. First, I have to download my editor of choice. Second, I have to setup my build environment (for the web that usually means node). Only with those two programs installed with appropriate binaries for my system can I begin developing.

Wouldn't it be great if you could do web development from a Chromebook (even one without linux apps), from an iPad Pro, or some future device that has only a web browser installed? Wouldn't it be great if I could go to a website, and/or install a PWA, setup some javascript plugins via either URL or local installation, and start coding on an editor that is editing local files for me? All with the site/PWA performing the build for me and allowing me to run what I am building with nothing more than the browser. That is the dream of project Hermes.

When this project was created it used the create-react-app and all the node libraries that includes. This was done to get someting up an running quickly. The goal of this app is for it to eventually be able to build itself in the browser. Once that is complete, the dream will be for it to build webassembly projects, webgl projects, webvr projects, and all other webapps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##Planned Feature Development
1) Basic PWA up and running
2) Plugin architecture for code to be added to the build-chain dynamically
3) Editor (Open and Close files, display project tree from directory)
4) 1st Plugin for PWA  project setup.
5) Shameless plugs for developers (maybe setup real project page)
6) es6 syntac highlighting plugin
7) webpack build plugin
9) JSX build plugin

Can we find a way to run current node_modules for build processes as part of this PWA without re-writing them?
