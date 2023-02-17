import {Component} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {routeAnimations} from "./animations/route/route.animations";
/*import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getMessaging, getToken, onMessage} from "firebase/messaging";*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'TollApps';

  constructor(private contexts: ChildrenOutletContexts) {
    //this.initFirebase()
  }

  /*private initFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyBN12Bbv2VbgENp_s38JvmtMJdI-TX8bKg",
      authDomain: "tollapps-48e5e.firebaseapp.com",
      projectId: "tollapps-48e5e",
      storageBucket: "tollapps-48e5e.appspot.com",
      messagingSenderId: "595194691048",
      appId: "1:595194691048:web:d1261a5dcb438b6f56385d",
      measurementId: "G-J3W3M3E0L8",
      vapidKey: "BOVnnOaH9FKwoyaqHKSuMidvkb5CVkjnfjuSeyZZGDqlUGUvV3rZ5KhvMzQ3oiLDDdlvsa-nmyxI6q6hguQX2Ek"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const messaging = getMessaging(app);

    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');

        getToken(messaging, {vapidKey: "BOVnnOaH9FKwoyaqHKSuMidvkb5CVkjnfjuSeyZZGDqlUGUvV3rZ5KhvMzQ3oiLDDdlvsa-nmyxI6q6hguQX2Ek"}).then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log(currentToken)
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
      }
    });

    onMessage(messaging, (payload) => {
      console.log('Message: ', payload);
    })
  }*/

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
