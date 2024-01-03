
# React Native Template

This is a test project to show capabilities of CoderGenix team development. It contains testing code for React Native project.

# Prerequisites

- Node.js > 12 and npm (Recommended: Use nvm)
- Watchman
- Xcode 12
- Cocoapods 1.10.1
- JDK > 11
- Android Studio and Android SDK

# Base dependencies

- axios for networking.
- react-navigation navigation library.
- redux for state management.
- redux-thunk to dispatch asynchronous actions.
- jest and react-native-testing-library for testing.

# Folder structure

* src: This folder is the main container of all the code inside your application.
    * assets: Asset folder to store all images, vectors, etc.
    * navigation: Folder to store the navigators.
    * Screen: Folder that contains all your application screens/features.
    * Store: Folder to put all redux middlewares and the store.
        * Reducers: Folder to redux slice files.
    * Utils:Folder to store any kind of constant that you have.
    * App-js: Main component that starts your whole app.
    * index.js: Entry point of your application as per React-Native standards.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```
### For iOS
```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Troubleshooting

Please contact us on codergenix@gmail.com OR info@codergenix.com