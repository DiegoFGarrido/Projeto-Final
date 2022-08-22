import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos/veiculos.service';

@Component({
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.css']
})
export class TableDashboardComponent implements OnInit {
  statsVeiculos: any;
  selected: any;

  constructor(private veiculosService: VeiculosService) {
    this.statsVeiculos = []
  }

  ngOnInit(): void {
    this.veiculosService.listaEstatisticasVeiculo().subscribe(retornoApi => {
      this.statsVeiculos = retornoApi
      this.selected = this.statsVeiculos[0]
    })
  }

  onHitEnter(vinCode: string) {
    // seleciona o item da lista de estatísticas com base no código VIN digitado
    // essa função é disparada apenas quando o usuário teclar ENTER

    const [stats] = this.statsVeiculos.filter((item: any) => item.vin === vinCode);
    this.selected = stats;
  }
}
