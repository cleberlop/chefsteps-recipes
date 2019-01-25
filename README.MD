# Recipes

Ionic 3.9.2 application

## Setup - getting ready to run IONIC:

- Make sure you have npm installed in your machine and install `Ionic`, `Cordova`, and `Yarn` by running:

  ```bash
  $ sudo npm install -g ionic cordova yarn
  ```

## Running the App on the Browser

- Install Dependencies

  cd into the project then run:

  ```bash
  $ yarn
  ```

  or

  ```bash
  $ npm install
  ```

- Serve the application:

  ```bash
  $ yarn serve
  ```

  or

  ```bash
  $ npm run serve
  ```

  This will, run and watch Pug, Sass, Typescript, and will serve the ionic app.
  For best experience use Google Chrome phone emulator within Chrome Dev Tools.

## Building for IOS

- Add IOS platform by running:
  ```bash
  $ cordova platform add ios
  ```
- Build IOS by running:
  ```bash
  $ yarn build:ios
  ```
  or
  ```bash
  $ npm run build:ios
  ```
- Open xcode project

  From the project root open `platforms/ios`. There you will find `chefsteps-recipes.xcodeproj` file. You can open this file on Xcode to run the application on a device or simulator. (You will have to change the team and set provisioning profiles and certificates to install on an Iphone)
