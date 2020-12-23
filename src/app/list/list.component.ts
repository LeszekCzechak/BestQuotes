import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Quotation} from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  quotes: Quotation[];

  @Output()
  vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number): void {
    this.vote.emit({quotation, value});
  }

}

export interface QuotationEvent {

  quotation: Quotation;
  value: number;
}
