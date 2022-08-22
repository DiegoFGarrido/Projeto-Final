import { VeiculosService } from './veiculos/veiculos.service';
import { Veiculos } from './veiculos/veiculos';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  veiculos!: Veiculos;

  constructor(private veiculosService: VeiculosService,

    ) { }

  ngOnInit() { }



}
