# 1. What does the single responsibility principle consist of? What's its purpose?
SRP consist on do exactly what it supposed to do. For example we have service.ts where we make all the api calls so any other code like filter response or something else should be in other folder and import that functionality and its purpose is to be clear in what's doing and also it's easier for testing.

# 2. What characteristics does, in your opinion, a “good” code or clean code have?
It has to be simple and split code as much as possible so if someone wants to see the logic can go to that file in specific and understand whats doing. 

# 3. Detail how you would do everything that you have not completed.
Test with jest and react testing library.

# Also you can find ipa and apk files on InstallOnDevice folder.

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

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:
