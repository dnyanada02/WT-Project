import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  public signinform !: FormGroup;

  //login
  public loginform !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.signinform=this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:['']
    })


//login
this.loginform=this.formBuilder.group({
  email:[''],
  password:['']
})


  }


  signIn(){
    this.http.post<any>("http://localhost:3000/userlogin",this.signinform.value)
    .subscribe(res=>{
      alert("Signin Successfull");
      this.signinform.reset();
      this.router.navigate(['userprofile']);
    },err=>{
    alert("something went wrong")
    
  })
}

logIn(){
  this.http.get<any>("http://localhost:3000/userlogin")
  .subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.email === this.loginform.value.email && a.password === this.loginform.value.password
    });
    if(user){
      alert("login succesfull !!");
      this.loginform.reset();
      this.router.navigate(['userprofile'])
    }else{
      alert("user not found. Please sign up");
    }
}, err=>{
  alert("something went wrong")
})

}
}


