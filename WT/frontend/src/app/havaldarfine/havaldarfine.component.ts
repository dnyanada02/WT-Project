import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { fineModel } from './havaldarfine.model';


@Component({
  selector: 'app-havaldarfine',
  templateUrl: './havaldarfine.component.html',
  styleUrls: ['./havaldarfine.component.css']
})
export class HavaldarfineComponent implements OnInit {

  formValue!: FormGroup;
  fineModelObj : fineModel = new fineModel();

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {


    this.formValue=this.formbuilder.group({
      name: [''],
      email: [''],
      pno: [''],
      vno: [''],
      lno:[''],
      date: [''],
      rule: [''],
      fine: ['']
    })


  }


  postFineDetails(){
    this.fineModelObj.name=this.formValue.value.name;
    this.fineModelObj.email=this.formValue.value.email;
    this.fineModelObj.pno=this.formValue.value.pno;
    this.fineModelObj.vno=this.formValue.value.vno;
    this.fineModelObj.lno=this.formValue.value.lno;
    this.fineModelObj.date=this.formValue.value.date;
    this.fineModelObj.rule=this.formValue.value.rule;
    this.fineModelObj.fine=this.formValue.value.fine;
    

    this.api.postFine(this.fineModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Fine added successfully!!")
      this.formValue.reset();
    },err=>{
      alert("Something went wrong")
    })

  }

}
