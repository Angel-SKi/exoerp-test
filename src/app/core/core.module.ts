import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { KpiCardComponent } from './layout/ui/kpi-card/kpi-card.component';
import { StatusBadgeComponent } from './layout/ui/status-badge/status-badge.component';
import { SearchInputComponent } from './layout/ui/search-input/search-input.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    KpiCardComponent,
    StatusBadgeComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
