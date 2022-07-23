import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-templete',
  templateUrl: './parent-templete.component.html',
  styleUrls: ['./parent-templete.component.css']
})
export class ParentTempleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Parent interacts with child via local variable';

}
