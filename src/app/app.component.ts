import {Component} from '@angular/core';
import {Quotation} from './models/quotation';
import {QUOTES} from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quotation[] = QUOTES;

  addVote(quotation: Quotation, value: number): void {
    quotation.votes += value;
  }

  bestQuotes(): any {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(): any {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation: Quotation): void {
    this.quotes.unshift(quotation);
  }
}
