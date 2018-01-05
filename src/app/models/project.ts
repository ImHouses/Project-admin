import { Company } from './company';

export class Project {
    id: number;
    name: string;
    initDate: Date;
    endDate: Date;
    company: Company;
}