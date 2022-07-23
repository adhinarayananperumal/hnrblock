import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  accNo: number=0;

  @Input()
  transactionType: string="";

}
