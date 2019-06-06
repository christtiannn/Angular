import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '../models/owner';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private httpCl: HttpClient) { 
  }
  getOwners(){
    return this.httpCl.get<Owner[]>('http://10.125.124.71:9966/petclinic/api/owners/');
  }
  getOwnerById(id:number){
    return this.httpCl.get<Owner>('http://10.125.124.71:9966/petclinic/api/owners/'+'/'+id);

  }
  newOwner(owner: Owner): Observable<Owner>{
    const headers=new HttpHeaders();
    headers.append('Content-type','application/json');
    headers.append('Accept','application/json');
    return this.httpCl.post<Owner>('http://10.125.124.71:9966/petclinic/api/owners',owner,{headers});
  }
}
