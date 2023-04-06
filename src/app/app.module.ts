import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Navbar1Component } from './navbar/navbar.component';
import { ChathomeComponent } from './chathome/chathome.component';
import { FormhomeComponent } from './formhome/formhome.component';
import { FormcardComponent } from './formcard/formcard.component';
import { LoginComponent } from './login/login.component';
import { LogupComponent } from './logup/logup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomepageComponent,
    Navbar1Component,
    ChathomeComponent,
    FormcardComponent,
    FormhomeComponent,
    LoginComponent,
    LogupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
