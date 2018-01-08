export class Company {
    _id: number;
    name: string;
    address: string;

    constructor(_id?: number, name?: string, address?: string) {
        this._id = _id;
        this.name = name;
        this.address = address;
    }
}