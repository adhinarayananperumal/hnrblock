import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-prpperty-binding-exp',
  templateUrl: './prpperty-binding-exp.component.html',
  styleUrls: ['./prpperty-binding-exp.component.css']
})
export class PrppertyBindingExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  reportType: string = "Report Type from Component";

  taxSlab: string = "10000";

  taxAmount: string = "100";

  taxAmt: string = "3400000";

  disTaxAmt() {
    alert(this.taxAmt);
  }

  changeReport() {
    this.reportType = "Changed report on clicking hyper link...";

  }

}
