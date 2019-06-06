import { Component, OnInit, Input } from '@angular/core';
import { OwnerService } from './owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../models/owner';
/*@Input()
  name: string;
  @Input()
  ltname: string;
  @Input()
  city: string;
  @Input()
  address: string;*/

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {



  errorMessage: string;
  owner: Owner;

  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService) {
    this.owner = <Owner>{}
  }

  ngOnInit() {
    const ownerId = this.route.snapshot.params['id'];
    this.ownerService.getOwnerById(ownerId).subscribe(
      owner => this.owner = owner,
      error => this.errorMessage = <any>error
    );
  }
  

}
