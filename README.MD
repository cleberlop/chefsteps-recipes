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

## Running the App on mobile phone using Ionic DevApp

- Run the instructions from `Running the App on the Browser` to compile and build everything.
- Stop the server `Ctrl + c`
- Download Ionic DevApp and create a free account

  Iphone: `https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8`

  Android:
  `https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en`

- The app will walk you through the next steps (Basically you just need to be on same WIFI and run ionic serve -c)

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
