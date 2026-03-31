import { Component } from '@angular/core';
import {
  DASHBOARD_KPIS,
  KpiItem,
  RECENT_INVOICES,
  InvoiceItem
} from './mocks/dashboard.mock';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  readonly kpis: KpiItem[] = DASHBOARD_KPIS;
  readonly invoices: InvoiceItem[] = RECENT_INVOICES;
  selectedInvoiceId = 'FT-2026-00125';

  trackByKpiLabel(_: number, item: KpiItem): string {
    return item.label;
  }

  trackByInvoiceId(_: number, item: InvoiceItem): string {
    return item.id;
  }

  isSelected(invoiceId: string): boolean {
    return invoiceId === this.selectedInvoiceId;
  }

  get selectedInvoice(): InvoiceItem {
    return this.invoices.find((invoice) => invoice.id === this.selectedInvoiceId) ?? this.invoices[0];
  }

  selectInvoice(invoiceId: string): void {
    this.selectedInvoiceId = invoiceId;
  }

}
