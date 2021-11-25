import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-userviewfine',
  templateUrl: './userviewfine.component.html',
  styleUrls: ['./userviewfine.component.css']
})
export class UserviewfineComponent implements OnInit {

fineData!: any;

  constructor(private api: ApiService) { }


  ngOnInit(): void {

    this.getAllFines();
  }


getAllFines(){
  this.api.getFine()
  .subscribe(res=>{
    this.fineData=res;
  })
}



}



