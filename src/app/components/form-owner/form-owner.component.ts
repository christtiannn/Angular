import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/owner/owner.service';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.scss']
})
export class FormOwnerComponent implements OnInit {
  owner: Owner;
  errorMessage: string;
  constructor(private ownerService: OwnerService) { 
    this.owner=<Owner>{};

  }
  ngOnInit() {
  }
  onSubmit(owner: Owner) {
    owner.id = null;
    this.ownerService.newOwner(owner).subscribe(
      new_owner => {
        this.owner = new_owner;
      },
      error=> this.errorMessage= <any>error
    );
  }

}
