import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUser(data: any){
    return this.http.post<any>("http://localhost:3000/userprofile", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUser(){
    return this.http.get<any>("http://localhost:3000/userprofile")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  //havaldar
  postHavaldar(hdata: any){
    return this.http.post<any>("http://localhost:3000/havaldarprofile", hdata)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getHavaldar(){
    return this.http.get<any>("http://localhost:3000/havaldarprofile")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  //addfine
  postFine(data: any){
    return this.http.post<any>("http://localhost:3000/addfine", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getFine(){
    return this.http.get<any>("http://localhost:3000/addfine")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
