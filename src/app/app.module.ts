import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyD8rTY72LzjvBD5WNoNB9ec9dQ9gfO__Yc",
  authDomain: "firestore-9a2d4.firebaseapp.com",
  databaseURL: "https://firestore-9a2d4.firebaseio.com",
  projectId: "firestore-9a2d4",
  storageBucket: "firestore-9a2d4.appspot.com",
  messagingSenderId: "1091620922604"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule,
    FormsModule                            
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
