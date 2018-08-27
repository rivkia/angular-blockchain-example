import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FirstContractComponent } from './first-contract/first-contract.component';
import { Web3Service } from './web3.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    FirstContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
