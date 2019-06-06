import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private httpCl: HttpClient) { 
  }
  getOwners(){
    return this.httpCl.get('http://10.125.124.71:9966/petclinic/api/owners');
  }
}
