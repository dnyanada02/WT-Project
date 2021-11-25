import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isActive= false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    if(this.isActive){
      this.isActive = false;
      this.ngOnInit();
    }
    else{
      this.isActive = true;
      this.ngOnInit();
    }

  }
}
