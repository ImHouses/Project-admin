import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies/companies.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Array<any>;

  constructor(private service: CompaniesService) {
    this.service.getCompanies()
      .subscribe(res => 
        {this.companies = res;
        console.log(this.companies);
        });
   }

  ngOnInit() {
  }

}
