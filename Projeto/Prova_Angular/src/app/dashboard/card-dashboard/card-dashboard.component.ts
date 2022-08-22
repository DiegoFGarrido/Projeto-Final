import { Component, Input, OnInit } from '@angular/core';
import { Veiculos } from '../veiculos/veiculos';
import { VeiculosService } from '../veiculos/veiculos.service';
import { GraficoDashboardComponent } from '../grafico-dashboard/grafico-dashboard.component';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {
 // @Input() veiculo: any;
  veiculos!: Veiculos;
  selected: any;

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.veiculosService.listaDeVeiculos().subscribe((retornoApi)=>{
      this.veiculos = retornoApi
      this.selected = this.veiculos[0]
    })
  }

  vehicleImg() {
    /*if (!this.selected) {
      return
    }*/
    const filename = `${this.selected.veiculo.toLowerCase().replaceAll(' ',"")}.png`;
    return filename;
  }

  onChange(event: any) {
    const id = Number(event.target.value);
    const [item] = this.veiculos.filter((item) => item.id === id);
    this.selected = item;
  }

}
