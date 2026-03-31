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
  notes: string;
  lines: InvoiceLine[];
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

export interface InvoiceLine {
  code: string;
  description: string;
  unit: string;
  qty: number;
  price: string;
  vatPct: string;
  total: string;
}

export const RECENT_INVOICES: InvoiceItem[] = [
  {
    id: 'FT-2026-00124',
    customer: 'Aster Srl',
    vatNumber: 'IT 03920150964',
    date: '29/03/2026',
    taxable: 'EUR 2.827,87',
    vat: 'EUR 622,13',
    total: 'EUR 3.450,00',
    status: 'paid',
    notes: 'Pagamento ricevuto tramite bonifico SEPA in data 30/03/2026.',
    lines: [
      {
        code: 'SRV-0038',
        description: 'Canone annuale assistenza premium',
        unit: 'anno',
        qty: 1,
        price: 'EUR 1.850,00',
        vatPct: '22%',
        total: 'EUR 2.257,00'
      },
      {
        code: 'INT-0021',
        description: 'Intervento on-site ottimizzazione processi',
        unit: 'giorni',
        qty: 2,
        price: 'EUR 490,00',
        vatPct: '22%',
        total: 'EUR 1.195,60'
      }
    ]
  },
  {
    id: 'FT-2026-00125',
    customer: 'Nova Tech',
    vatNumber: 'IT 10188230968',
    date: '28/03/2026',
    taxable: 'EUR 1.622,95',
    vat: 'EUR 357,05',
    total: 'EUR 1.980,00',
    status: 'pending',
    notes: 'Pagamento a 30 giorni dalla data di emissione. RID bancario attivo.',
    lines: [
      {
        code: 'SRV-0041',
        description: 'Canone mensile piattaforma ERP',
        unit: 'mese',
        qty: 1,
        price: 'EUR 980,00',
        vatPct: '22%',
        total: 'EUR 1.195,60'
      },
      {
        code: 'CON-0019',
        description: 'Consulenza implementazione modulo magazzino',
        unit: 'ore',
        qty: 4,
        price: 'EUR 120,00',
        vatPct: '22%',
        total: 'EUR 585,60'
      },
      {
        code: 'LIC-0007',
        description: 'Licenza add-on reportistica avanzata',
        unit: 'anno',
        qty: 1,
        price: 'EUR 199,00',
        vatPct: '22%',
        total: 'EUR 242,78'
      }
    ]
  },
  {
    id: 'FT-2026-00126',
    customer: 'Orbit SpA',
    vatNumber: 'IT 07894401004',
    date: '25/03/2026',
    taxable: 'EUR 5.090,16',
    vat: 'EUR 1.119,84',
    total: 'EUR 6.210,00',
    status: 'overdue',
    notes: 'Sollecito inviato il 29/03/2026. Atteso riscontro amministrazione cliente.',
    lines: [
      {
        code: 'ERP-0102',
        description: 'Setup multi-sede e configurazione workflow approvativi',
        unit: 'pacchetto',
        qty: 1,
        price: 'EUR 3.890,16',
        vatPct: '22%',
        total: 'EUR 4.745,99'
      },
      {
        code: 'TRN-0009',
        description: 'Training utenti area amministrativa',
        unit: 'ore',
        qty: 10,
        price: 'EUR 120,00',
        vatPct: '22%',
        total: 'EUR 1.464,00'
      }
    ]
  },
  {
    id: 'FT-2026-00127',
    customer: 'Linea Lab',
    vatNumber: 'IT 12210170960',
    date: '22/03/2026',
    taxable: 'EUR 770,49',
    vat: 'EUR 169,51',
    total: 'EUR 940,00',
    status: 'draft',
    notes: 'Bozza in revisione interna prima dell invio al cliente.',
    lines: [
      {
        code: 'SUP-0012',
        description: 'Supporto remoto area ciclo attivo',
        unit: 'ore',
        qty: 5,
        price: 'EUR 95,00',
        vatPct: '22%',
        total: 'EUR 579,50'
      },
      {
        code: 'CFG-0030',
        description: 'Configurazione report personalizzato vendite',
        unit: 'attivita',
        qty: 1,
        price: 'EUR 295,49',
        vatPct: '22%',
        total: 'EUR 360,50'
      }
    ]
  }
];
