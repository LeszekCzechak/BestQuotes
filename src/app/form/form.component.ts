import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quotation} from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  newQuotation = new EventEmitter<Quotation>();

  showForm = false;

  quotation: Quotation = {author: '', sentence: '', votes: 0};

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation(): void {
    this.newQuotation.emit(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0};
  }
}