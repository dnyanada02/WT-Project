import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { HavaldarModel } from './havaldarprofile.model';

@Component({
  selector: 'app-havaldarprofile',
  templateUrl: './havaldarprofile.component.html',
  styleUrls: ['./havaldarprofile.component.css']
})
export class HavaldarprofileComponent implements OnInit {

  formValue!: FormGroup;
  HavaldarModelObj : HavaldarModel = new HavaldarModel();


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
      hid: [''],
      ano: ['']
    })


  }

  postHavaldarDetails(){
    this.HavaldarModelObj.username=this.formValue.value.username;
    this.HavaldarModelObj.email=this.formValue.value.email;
    this.HavaldarModelObj.fname=this.formValue.value.fname;
    this.HavaldarModelObj.lname=this.formValue.value.lname;
    this.HavaldarModelObj.add=this.formValue.value.add;
    this.HavaldarModelObj.city=this.formValue.value.city;
    this.HavaldarModelObj.country=this.formValue.value.country;
    this.HavaldarModelObj.pcode=this.formValue.value.pcode;
    this.HavaldarModelObj.hid=this.formValue.value.hid;
    this.HavaldarModelObj.ano=this.formValue.value.ano;
    

    this.api.postHavaldar(this.HavaldarModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Havaldar info added successfully!!")
      this.formValue.reset();
    },err=>{
      alert("Something went wrong")
    })

  }

}
