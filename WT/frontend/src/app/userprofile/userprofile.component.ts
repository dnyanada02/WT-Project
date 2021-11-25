import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { UserModel } from './userprofile.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  formValue!: FormGroup;
  userModelObj : UserModel = new UserModel();
  userdata!: any;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      username: [''],
      email: [''],
      fname: [''],
      lname: [''],
      add: [''],
      city: [''],
      country:[''],
      pcode: [''],
      vno: [''],
      lno: [''],
      ano: ['']
    })
  }

  postUserDetails(){
    this.userModelObj.username=this.formValue.value.username;
    this.userModelObj.fname=this.formValue.value.fname;
    this.userModelObj.lname=this.formValue.value.lname;
    this.userModelObj.add=this.formValue.value.add;
    this.userModelObj.city=this.formValue.value.city;
    this.userModelObj.country=this.formValue.value.country;
    this.userModelObj.pcode=this.formValue.value.pcode;
    this.userModelObj.vno=this.formValue.value.vno;
    this.userModelObj.lno=this.formValue.value.lno;
    this.userModelObj.ano=this.formValue.value.ano;

    this.api.postUser(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("User added successfully!!")
      this.formValue.reset();
    },err=>{
      alert("Something went wrong")
    })

  }

  // onEdit(row: any){
  //   this.formValue.controls['username'].setValue(row.username);
  //   this.formValue.controls['fname'].setValue(row.fname);
  //   this.formValue.controls['lname'].setValue(row.lname);
  //   this.formValue.controls['add'].setValue(row.add);
  //   this.formValue.controls['city'].setValue(row.city);
  //   this.formValue.controls['country'].setValue(row.country);
  //   this.formValue.controls['pcode'].setValue(row.pcode);
  //   this.formValue.controls['vno'].setValue(row.vno);
  //   this.formValue.controls['lno'].setValue(row.lno);
  //   this.formValue.controls['ano'].setValue(row.ano);
  // }

}

