import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { FirstContractComponent } from './first-contract/first-contract.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'first-contract', component: FirstContractComponent },
  { path: '**', component: AccountsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
