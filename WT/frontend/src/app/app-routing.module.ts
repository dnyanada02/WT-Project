import { NgModule } from '@angular/core';
import { ChoiceprofileComponent } from './choiceprofile/choiceprofile.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TrafficrulesComponent } from './trafficrules/trafficrules.component'; 
import { ChoiceloginComponent } from './choicelogin/choicelogin.component';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { ContactComponent } from './contact/contact.component';
import { HavaldarsigninComponent } from './havaldarsignin/havaldarsignin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HavaldarprofileComponent } from './havaldarprofile/havaldarprofile.component';
import { UserviewfineComponent } from './userviewfine/userviewfine.component';
import { PoliceloginComponent } from './policelogin/policelogin.component';
import { HavaldarfineComponent } from './havaldarfine/havaldarfine.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [ 
  {
    path:'',component:HomepageComponent
  },
  {
      path: 'homepage',
      component: HomepageComponent
      },
      {
        path: 'trafficrules',
        component: TrafficrulesComponent
      },
      {
        path: 'choicelogin',
        component: ChoiceloginComponent
      },
      {
        path: 'userlogin',
        component: UserloginComponent
      },
      {
        path: 'faqpage',
        component: FaqpageComponent
      },
      {
        path: 'newspage',
        component: NewspageComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'havaldarsignin',
        component: HavaldarsigninComponent
      },
      {
        path: 'userprofile',
        component: UserprofileComponent
      },
      {
        path: 'havaldarprofile',
        component: HavaldarprofileComponent
      },
      {
        path: 'userviewfine',
        component: UserviewfineComponent
      },
      {
        path: 'havadlarfine',
        component: HavaldarfineComponent
      },
      {
        path: 'policelogin',
        component: PoliceloginComponent
      },
      {
        path: 'choiceprofile',
        component: ChoiceprofileComponent 
      },
      {
        path: 'havaldarfine',
        component:  HavaldarfineComponent
      }

     




      
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
