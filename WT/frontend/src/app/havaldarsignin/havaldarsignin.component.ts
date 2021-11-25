
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-havaldarsignin',
  templateUrl: './havaldarsignin.component.html',
  styleUrls: ['./havaldarsignin.component.css']
})
export class HavaldarsigninComponent implements OnInit {

  public hsigninform !: FormGroup;

  //login
  public hloginform !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {


    this.hsigninform=this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:['']
    })


//login
this.hloginform=this.formBuilder.group({
  email:[''],
  password:['']
})

  }



  signIn(){
    this.http.post<any>("http://localhost:3000/havaldarlogin",this.hsigninform.value)
    .subscribe(res=>{
      alert("Signin Successfull");
      this.hsigninform.reset();
      this.router.navigate(['havaldarprofile']);
    },err=>{
    alert("something went wrong")
    
  })
}

logIn(){
  this.http.get<any>("http://localhost:3000/havaldarlogin")
  .subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.email === this.hloginform.value.email && a.password === this.hloginform.value.password
    });
    if(user){
      alert("login succesfull !!");
      this.hloginform.reset();
      this.router.navigate(['havaldarprofile'])
    }else{
      alert("user not found. Please sign up");
    }
}, err=>{
  alert("something went wrong")
})

}



}
