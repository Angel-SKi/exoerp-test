import { Component, Input } from '@angular/core';

type KpiTone = 'green' | 'orange' | 'red' | 'slate' | 'accent';
type KpiTrend = 'up' | 'down';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {
  @Input() icon = 'insights';
  @Input() value = '0';
  @Input() label = 'KPI';
  @Input() trend: KpiTrend = 'up';
  @Input() trendText = '+0%';
  @Input() tone: KpiTone = 'accent';
  @Input() progress = 50;
}
