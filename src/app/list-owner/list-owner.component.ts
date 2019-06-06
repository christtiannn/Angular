import { Component, OnInit, Input } from '@angular/core';
import { OwnerService } from '../owner/owner.service';
import { Owner } from '../models/owner';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})

export class ListOwnerComponent implements OnInit {

  public owners: Array<Owner>;
  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwners().subscribe(
      data => { this.owners = data; }
    )
  }

}
