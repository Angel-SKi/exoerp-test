import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../mocks/dashboard.mock';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent {
  @Input() detail!: InvoiceItem;
}
