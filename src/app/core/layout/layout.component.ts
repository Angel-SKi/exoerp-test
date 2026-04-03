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

  /** Funzione di tracking per *ngFor sui KPI: restituisce l'etichetta come chiave univoca per ottimizzare il re-rendering. */
  trackByKpiLabel(_: number, item: KpiItem): string {
    return item.label;
  }

  /** Funzione di tracking per *ngFor sulle fatture: restituisce l'ID come chiave univoca per ottimizzare il re-rendering. */
  trackByInvoiceId(_: number, item: InvoiceItem): string {
    return item.id;
  }

  /** Restituisce true se la fattura con l'ID specificato è quella attualmente selezionata. */
  isSelected(invoiceId: string): boolean {
    return invoiceId === this.selectedInvoiceId;
  }

  /** Getter che restituisce l'oggetto fattura corrispondente all'ID selezionato; ricade sulla prima fattura se non trovata. */
  get selectedInvoice(): InvoiceItem {
    return this.invoices.find((invoice) => invoice.id === this.selectedInvoiceId) ?? this.invoices[0];
  }

  /** Getter che restituisce la lista di fatture filtrate in base al termine di ricerca corrente, confrontando ID, cliente e partita IVA. */
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

  /** Imposta la fattura selezionata tramite ID e scrolla il pannello di dettaglio nella viewport con animazione fluida. */
  selectInvoice(invoiceId: string): void {
    this.selectedInvoiceId = invoiceId;
    /** Utilizza requestAnimationFrame per garantire che lo scroll avvenga dopo l'aggiornamento del DOM. */
    requestAnimationFrame(() => {
      this.detailPanelHost?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /** Aggiorna il termine di ricerca corrente quando l'utente digita nella barra di ricerca. */
  onSearchChange(value: string): void {
    this.searchTerm = value;
  }

}
