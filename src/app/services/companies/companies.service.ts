import { Injectable } from '@angular/core';

import { Company } from '../../models/company';

@Injectable()
export class CompaniesService {

  constructor() { }

  getCompanies(): Array<Company> {
    return [
      { id: 1, name: 'The Pokemon Company', address: 'Tokio, Japan' },
      { id: 2, name: 'Alphabet', address: 'Mountain View, CA'},
      { id: 3, name: 'Apple', address: 'Cuppertino, CA'},
      { id: 4, name: 'Yamblet', address: 'Paseo de la Reforma 296, Piso 42, CDMX'},
      { id: 5, name: 'Microsoft', address: 'Redmond, WA'}
    ];
  }

}
