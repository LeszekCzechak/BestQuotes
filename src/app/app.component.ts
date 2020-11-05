import {Component} from '@angular/core';
import {Quotation} from './models/quotation';
import {QUOTES} from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bestQuotes';
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = {author: '', sentence: '', votes: 0};

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  // tslint:disable-next-line:typedef
  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0};
  }
}
