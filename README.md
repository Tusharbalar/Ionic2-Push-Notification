# Ionic2-Push-Notification

This can be used as base template for Ionic 2 Push apps. It's working for both iOS and Android Push Notifications.

## Getting Started

* Clone this repository.

* Install Ionic and cordova

```bash
$ npm install -g ionic@beta
$ sudo npm install -g cordova
```

* Replace YOUR_PROJECT_NUMBER_HERE in app.component.ts with above PROJECT_NUMBER

* Install node_modules and push plugin ` bash $ npm install $ ionic plugin add https://github.com/phonegap/phonegap-plugin-push --variable SENDER_ID=”YOUR_PROJECT_NUMBER_HERE” `

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


