import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stateFlag = false;

  toggleState() {
    alert("toggle state called......................");
      this.stateFlag = !this.stateFlag;
  }

  submit() {
      console.log('Button submitted');
  }

  calculateClasses() {
      return {
          btn: true,
          'btn-primary': this.stateFlag,
          'btn-extra-class': this.stateFlag
      };
  }


}











