import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies/companies.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  service: CompaniesService;
  companies: Array<Company>;

  constructor(service: CompaniesService) {
    this.service = service;
    this.companies = service.getCompanies();
   }

  ngOnInit() {
  }

}
