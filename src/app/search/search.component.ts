import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public query: string;
  public result: string;
  
  @Input()
  labelButton: string;
  @Input()
  placeHolder: string;
  @Output()
  eventoBuscar = new EventEmitter();

  constructor() {
    this.query = '';
  }

  ngOnInit() {
  }

  search() {
    this.result = 'Consulta realizada con query ' + this.query;
    this.eventoBuscar.emit({query: this.query, result: this.result});
  }
}

