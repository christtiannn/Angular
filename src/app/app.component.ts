import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tallerAngular';


  public query: string;
  public labelBuscar: string;
  public labelPlaceHolder: string;
  public eventMsg: string;

  constructor() {
    this.query = '';
    this.labelBuscar = 'Buscar';
    this.labelPlaceHolder = 'Que quieres buscar?'
  }
  search(event){
    this.eventMsg = event.query + ' => ' + event.result;
  }

}

