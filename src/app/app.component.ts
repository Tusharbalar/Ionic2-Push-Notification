import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen, Push } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.pushNotification();
    });
  }

  pushNotification() {

    let push = Push.init({
      android: {
        senderID: "YOUR_SENDER_ID"
      },
      ios: {
        alert: "true",
        badge: false,
        sound: "true"
      },
      windows: {}
    });

    push.on('registration', (data) => {
      console.log("device token ->", data.registrationId);
      //TODO - send device token to server
      let confirmAlert = this.alertCtrl.create({
        title: 'In Registration ' + JSON.stringify(data.registrationId),
        message: "",
        buttons: [{
          text: 'Ignore',
          role: 'cancel'
        }, {
          text: 'Send',
          handler: () => {
            //TODO: Your logic here
          }
        }]
      });
      confirmAlert.present();
    });

    push.on('notification', (data) => {
      console.log('message', data.message);
      let self = this;
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              self.nav.setRoot(TabsPage);
            }
          }]
        });
        self.nav.present(confirmAlert);
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        self.nav.setRoot(TabsPage);
        console.log("Push notification clicked");
      }
    });

    push.on('error', (e) => {
        console.log(e.message);
    });
  }

}
