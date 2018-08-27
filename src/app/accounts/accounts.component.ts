import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

class Account {
  address: string;
  balance: number
}

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];
  isLoading: boolean;
  errorMessage: string;

  constructor(public web3Service: Web3Service) {
    
  }

  ngOnInit() {
    this.isLoading = true;
    
    this.web3Service.accounts((accountsError, accounts: string[]) => {
      if (accountsError) {
        this.errorMessage= 'Hmm.. looks like there was an error: '+ String(accountsError);
      } else {
        this.accounts = accounts.map((address: string) => {
          var account = new Account();
          account.address = address;
          account.balance = this.web3Service.web3.eth.getBalance(address).toNumber();
          account.balance = this.web3Service.web3.fromWei(account.balance);
          return account;
        });
      }

      this.isLoading = false;
    });
  }

}
