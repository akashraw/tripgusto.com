import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css']
})
export class NoPageComponent implements OnInit {
  showDiv = {
    previous : true,
    current : false,
    next : false
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
