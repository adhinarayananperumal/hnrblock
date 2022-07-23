import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-flight-timings',
  templateUrl: './flight-timings.component.html',
  styleUrls: ['./flight-timings.component.css']
})
export class FlightTimingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() flightName: any;

  flightTimings: any = "..";


  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called................" + this.flightName);

    this.flightTimings = this.flightTimingsMap.get(this.flightName);
    console.log("flight timings ................" + this.flightTimings);

  }

  flightTimingsMap = new Map<string, string>([
    ["f1", "9pm"],
    ["f2", "10pm"]
  ]);




}
