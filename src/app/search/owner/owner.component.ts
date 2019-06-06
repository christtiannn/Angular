import { Component, OnInit, Input } from '@angular/core';
import { OwnerService } from './owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  
  @Input()
  name: string;
  @Input()
  ltname: string;
  @Input()
  city: string;

  constructor() { }

  ngOnInit() {
    
  }

}
