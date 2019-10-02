import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { AddressComponent } from './pages/address/address.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: '1', component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
