import { Component, OnInit } from '@angular/core';
import { FirstContractService } from './first-contract.service';

@Component({
  selector: 'app-first-contract',
  templateUrl: './first-contract.component.html',
  styleUrls: ['./first-contract.component.css'],
  providers: [FirstContractService]
})
export class FirstContractComponent implements OnInit {
  contractAddress: string;
  response: string="";
  age: number;
  name:string;
  constructor(public firstContractService: FirstContractService) { }

  ngOnInit() {
  }

  deploy() {
    this.firstContractService.deploy((err,contract) => {
      if(err)
        this.response = 'Error at deploying ' + String(err);
      else{
        this.response = 'Contract deployed to address: ' + String(contract.address);
        this.contractAddress=contract.address;
      }
       
    });
  }

  fromAddress() {
    this.firstContractService.fromAddress(this.contractAddress);
    this.response = 'Contract attached to address: ' + String(this.firstContractService.ContractInstance.address);
  }

  getValue() {
    this.firstContractService.getData((error,result) => {
      this.name = result[0];
      this.age =result[1];
      this.response='The value stored in the contract is: ' + result;
    });
  }
  setValue() {
    this.firstContractService.setData(this.name, this.age,(error,result) =>
    {
      this.response ='Setting value... Your transaction hash is: ' + String(result);
    });
    
  }

}
