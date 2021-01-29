# Expo React Native Example Project 
The repo is for testing building Android and IOS standalone app.

**Note:** The example project uses expo managed workflow

## Get started 
1. To test the app, you need to have Android studio emulator or/and IOS simulator ready first. 
[Android Studio Emulator](https://docs.expo.io/workflow/android-studio-emulator/)
[IOS Simulator](https://docs.expo.io/workflow/ios-simulator/)
>

1. Clone / download the project and open with vscode, then run below command in terminal to install dependencies:
```
npm install
```

## Use expo to develop and test

With android emulator or ios simulator running, run below commad in terminal:
```
npm start
```
Follow the instruction to test the app on different plateform. 
For example
- enter i for IOS simulator
- enter a for Android emulator


More detailed instruction can be found on expo website [Get Started](https://docs.expo.io/get-started/create-a-new-app/)

## Test pre-build package on your device or simulator

**Android**

1. Download prebuild apk from [here](https://expo.io/artifacts/855a2613-5af6-47f7-83dd-c9635696637f)
2. Run one emulator of your choice and you can drag and drop the .apk into the emulator.
3. To run it on your Android device, make sure you have the Android platform tools installed along with adb, then just run adb install app-filename.apk with USB debugging enabled on your device and the device plugged in.

**iOS**

1. Download artifacts from [here](https://expo.io/artifacts/f8212680-2b00-47f0-a659-3a00e15b7786)
2. To install the resulting tar.gz file, unzip it and drag-and-drop it into your iOS simulator. 
3. If you'd like to install it from the command line, run tar -xvzf your-app.tar.gz to unpack the file, open a simulator, then run xcrun simctl install booted <path to .app>.
4. The IOS prebuild package only support simulator. To test a device build with Apple TestFlight, refers to expo document [build standalone app](https://docs.expo.io/distribution/building-standalone-apps/)

