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
      { id: 4, name: 'Empresa 4', address: 'Ubicación de empresa 4'},
      { id: 4, name: 'Empresa 5', address: 'Ubicación de empresa 5'},
      { id: 4, name: 'Empresa 6', address: 'Ubicación de empresa 6'},
      { id: 4, name: 'Empresa 7', address: 'Ubicación de empresa 7'},
      { id: 4, name: 'Empresa 8', address: 'Ubicación de empresa 8'},
      { id: 4, name: 'Empresa 9', address: 'Ubicación de empresa 9'}
    ];
  }

}
