import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

@Injectable()
export class Web3Service {
  public web3: any;
  
  constructor() { 
    let urlProvider="http://bcwsix-dns-reg1.eastus.cloudapp.azure.com:8545";
     //urlProvider="http://localhost:8545"
    this.web3 = new Web3(new Web3.providers.HttpProvider(urlProvider));
  }

  accounts(func:any): any {
    return this.web3.eth.getAccounts(func);
  }


}
