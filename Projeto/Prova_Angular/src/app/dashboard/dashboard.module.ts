import { PoModule } from '@po-ui/ng-components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';
import { TableDashboardComponent } from './table-dashboard/table-dashboard.component';
import { GraficoDashboardComponent } from './grafico-dashboard/grafico-dashboard.component';
//import {GraficoService} from './grafico-dashboard/grafico.service.ts';


@NgModule({
  declarations: [
    DashboardComponent,
    CardDashboardComponent,
    TableDashboardComponent,
    GraficoDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PoModule
  ],
  exports: [
    DashboardComponent
  ],
  providers:[
    //GraficoService
  ]
})
export class DashboardModule { }
