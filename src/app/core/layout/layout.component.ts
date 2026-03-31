import { ElementRef, ViewChild, Component } from '@angular/core';
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
  @ViewChild('detailPanelHost', { read: ElementRef })
  detailPanelHost?: ElementRef<HTMLElement>;

  readonly kpis: KpiItem[] = DASHBOARD_KPIS;
  readonly invoices: InvoiceItem[] = RECENT_INVOICES;
  selectedInvoiceId = 'FT-2026-00125';
  searchTerm = '';

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

  get filteredInvoices(): InvoiceItem[] {
    const normalizedTerm = this.searchTerm.trim().toLowerCase();

    if (!normalizedTerm) {
      return this.invoices;
    }

    return this.invoices.filter((invoice) => {
      const haystack = `${invoice.id} ${invoice.customer} ${invoice.vatNumber}`.toLowerCase();
      return haystack.includes(normalizedTerm);
    });
  }

  selectInvoice(invoiceId: string): void {
    this.selectedInvoiceId = invoiceId;

    requestAnimationFrame(() => {
      this.detailPanelHost?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  onSearchChange(value: string): void {
    this.searchTerm = value;
  }

}
