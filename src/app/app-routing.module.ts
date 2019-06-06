import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { ListOwnerComponent } from './list-owner/list-owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'owners',
    component: ListOwnerComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'owner/:id',
    component: OwnerComponent
  },
  {
    path: 'owners-add',
    component: FormOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
