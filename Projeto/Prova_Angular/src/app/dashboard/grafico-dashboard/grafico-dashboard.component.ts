import { GraficoService } from './grafico.service';
import {  Component, Input, OnInit, SimpleChanges } from '@angular/core';

declare var google: any;


@Component({
  selector: 'app-grafico-dashboard',
  templateUrl: './grafico-dashboard.component.html',
  styleUrls: ['./grafico-dashboard.component.css']
})
export class GraficoDashboardComponent implements OnInit {

  private graficos: any;

  @Input() carroConectado: any;

  constructor(private graficoService: GraficoService) {

  }

  ngOnInit() {
    this.graficoService.obterDados().subscribe(
      graficos => {
        this.graficos = graficos;
        this.init();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.init();
  }

  init(): void {
    if(typeof(google) !== 'undefined'){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() =>{
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos(): void{
    this.exibirPieChart();
    this.exibir3dPieChart();
  }

  exibirPieChart(): void{
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  exibir3dPieChart(): void{
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable2(), this.obterOpcoes2())
  }

  obterDataTable(): any{
    const data = new google.visualization.DataTable();

    data.addColumn('string','Mes');
    data.addColumn('number', 'Quantidade');
    data.addRows([['Conectados', this.carroConectado.conectado], ['Off Line', this.carroConectado.volume - this.carroConectado.conectado]]); //this.graficos
    console.log(this.carroConectado.veiculo)
    return data;
  }

  obterOpcoes(): any {
    return {
      //'title': 'Conectados x OffLine',
      'width': 400,
      'height': 200
    };
  }

  obterDataTable2(): any{
    const data = new google.visualization.DataTable();

    data.addColumn('string','Mes');
    data.addColumn('number', 'Quantidade');
    data.addRows([['Atualizados', this.carroConectado.atualizacao], ['Desatualizados', this.carroConectado.volume - this.carroConectado.atualizacao]]); //this.graficos

    return data;
  }

  obterOpcoes2(): any {
    return {
      //'title': 'Atualizados x Desatualizados',
      'is3D': true,
      'width': 400,
      'height': 200
    };
  }

}






