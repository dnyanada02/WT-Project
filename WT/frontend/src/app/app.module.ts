import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TrafficrulesComponent } from './trafficrules/trafficrules.component';
import { ChoiceloginComponent } from './choicelogin/choicelogin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewspageComponent } from './newspage/newspage.component';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { PoliceloginComponent } from './policelogin/policelogin.component';
import { ContactComponent } from './contact/contact.component';
import { HavaldarsigninComponent } from './havaldarsignin/havaldarsignin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HavaldarprofileComponent } from './havaldarprofile/havaldarprofile.component';
import { UserviewfineComponent } from './userviewfine/userviewfine.component';
import { ChoiceprofileComponent } from './choiceprofile/choiceprofile.component';
import { HavaldarfineComponent } from './havaldarfine/havaldarfine.component';

import { ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FaqpageComponent,
    ContactComponent,
    
    PoliceloginComponent,
    HavaldarsigninComponent,
    ChoiceloginComponent,
    UserprofileComponent,
    HavaldarprofileComponent,
    UserviewfineComponent,
    ChoiceprofileComponent,
    HavaldarfineComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }