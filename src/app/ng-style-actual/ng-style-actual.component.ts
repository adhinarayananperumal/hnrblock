import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-actual',
  templateUrl: './ng-style-actual.component.html',
  styleUrls: ['./ng-style-actual.component.css']
})
export class NgStyleActualComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getColor(country: any): any {
    switch (country) {
      case "UK":
        return "green";
      case "USA":
        return "blue";
      case "HK":
        return "red";
    }
  }

  people: any[] = [
    {
      name: "Douglas  Pace",
      country: "UK"
    },
    {
      name: "Mcleod  Mueller",
      country: "USA"
    },
    {
      name: "Day  Meyers",
      country: "HK"
    },
    {
      name: "Aguirre  Ellis",
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      country: "USA"
    }
  ];


}
