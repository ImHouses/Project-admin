import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class CompaniesService {

  result: any;

  constructor(private httpService: Http) { }

  getCompanies() {
    return this.httpService.get("/api/companies")
      .map(result => this.result = result.json().data);
  }

}
