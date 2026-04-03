import { Component, Input } from '@angular/core';

type BadgeStatus = 'paid' | 'pending' | 'overdue' | 'draft';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  @Input() status: BadgeStatus = 'draft';

  /** Getter che restituisce l'etichetta testuale localizzata corrispondente allo stato del badge ('paid', 'pending', 'overdue', 'draft'). */
  get label(): string {
    switch (this.status) {
      case 'paid':
        return 'Pagata';
      case 'pending':
        return 'In Attesa';
      case 'overdue':
        return 'Scaduta';
      default:
        return 'Bozza';
    }
  }
}
