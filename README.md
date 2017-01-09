# Ionic2-Push-Notification

This can be used as base template for Ionic 2 Push apps. It's working for both iOS and Android Push Notifications.

## Tutorial

* [a Push Notifications in Ionic 2
](https://medium.com/@ankushaggarwal/push-notifications-in-ionic-2-658461108c59#.38k12r3zv)

* [a FCM Setup for Android Notifications](https://medium.com/@ankushaggarwal/gcm-setup-for-android-push-notifications-656cfdd8adbd#.5muotfc1n)

* [a APNS Setup for IOS Notifications](https://medium.com/@ankushaggarwal/generate-apns-certificate-for-ios-push-notifications-85e4a917d522#.p01jyoa9b)

## Getting Started

* Clone this repository.

* Install Ionic and cordova

```bash
$ npm install -g ionic@beta
$ sudo npm install -g cordova
```

* Replace YOUR_SENDER_ID in package.json and app.ts with above SENDER_ID

* Install node_modules and push plugin ` $ npm install $ ionic plugin add https://github.com/phonegap/phonegap-plugin-push --variable SENDER_ID=”YOUR_SENDER_ID” `

### Android
``` bash
$ ionic platform add android
$ ionic build android
$ ionic run android
```

### iOS

``` bash
$ ionic platform add ios
$ ionic build ios

Run using XCode
```

## Push Notifications Preview in lock screen and while using App

* Android
![Alt text](src/screenshots/android_alert.png?raw=true "Android Alert")

* ios
![Alt text](src/screenshots/ios_alert.png?raw=true "ios Alert")
