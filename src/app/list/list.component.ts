import { Quotation } from './../models/quotation';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() quotes: Quotation[];
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({ quotation, value });
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
