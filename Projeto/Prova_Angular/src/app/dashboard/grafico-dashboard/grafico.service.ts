import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {



  graficos = [

  ];


  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.graficos);
      observable.complete();
    });
  }

}
