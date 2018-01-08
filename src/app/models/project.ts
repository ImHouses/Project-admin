import { Company } from './company';

export class Project {
    _id: number;
    name: string;
    initDate: Date;
    endDate: Date;
    companyId: number;
}