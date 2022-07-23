import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-templet',
  templateUrl: './child-templet.component.html',
  styleUrls: ['./child-templet.component.css']
})
export class ChildTempletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }


}
