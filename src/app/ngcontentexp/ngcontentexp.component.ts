import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontentexp',
  templateUrl: './ngcontentexp.component.html',
  styleUrls: ['./ngcontentexp.component.css']
})
export class NgcontentexpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  action(){
    console.log("action triggered")
  }

}
