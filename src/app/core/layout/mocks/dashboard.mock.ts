export type KpiTone = 'green' | 'orange' | 'red' | 'slate' | 'accent';
export type KpiTrend = 'up' | 'down';
export type InvoiceStatus = 'paid' | 'pending' | 'overdue' | 'draft';

export interface KpiItem {
  icon: string;
  label: string;
  value: string;
  trend: KpiTrend;
  trendText: string;
  tone: KpiTone;
  progress: number;
}

export interface InvoiceItem {
  id: string;
  customer: string;
  vatNumber: string;
  date: string;
  taxable: string;
  vat: string;
  total: string;
  status: InvoiceStatus;
}

export const DASHBOARD_KPIS: KpiItem[] = [
  {
    icon: 'payments',
    label: 'Fatturato',
    value: 'EUR 128.450',
    trend: 'up',
    trendText: '+8.4%',
    tone: 'green',
    progress: 78
  },
  {
    icon: 'schedule',
    label: 'In Attesa',
    value: 'EUR 24.190',
    trend: 'down',
    trendText: '-2.1%',
    tone: 'orange',
    progress: 42
  },
  {
    icon: 'warning',
    label: 'Scadute',
    value: 'EUR 7.920',
    trend: 'down',
    trendText: '-0.8%',
    tone: 'red',
    progress: 28
  },
  {
    icon: 'description',
    label: 'Bozze',
    value: '43',
    trend: 'up',
    trendText: '+4',
    tone: 'slate',
    progress: 61
  }
];

export const RECENT_INVOICES: InvoiceItem[] = [
  {
    id: 'FT-2026-00124',
    customer: 'Aster Srl',
    vatNumber: 'IT 03920150964',
    date: '29/03/2026',
    taxable: 'EUR 2.827,87',
    vat: 'EUR 622,13',
    total: 'EUR 3.450,00',
    status: 'paid'
  },
  {
    id: 'FT-2026-00125',
    customer: 'Nova Tech',
    vatNumber: 'IT 10188230968',
    date: '28/03/2026',
    taxable: 'EUR 1.622,95',
    vat: 'EUR 357,05',
    total: 'EUR 1.980,00',
    status: 'pending'
  },
  {
    id: 'FT-2026-00126',
    customer: 'Orbit SpA',
    vatNumber: 'IT 07894401004',
    date: '25/03/2026',
    taxable: 'EUR 5.090,16',
    vat: 'EUR 1.119,84',
    total: 'EUR 6.210,00',
    status: 'overdue'
  },
  {
    id: 'FT-2026-00127',
    customer: 'Linea Lab',
    vatNumber: 'IT 12210170960',
    date: '22/03/2026',
    taxable: 'EUR 770,49',
    vat: 'EUR 169,51',
    total: 'EUR 940,00',
    status: 'draft'
  }
];
