export class CompanyData {
    uuid: string;
    name: string;
    description: string;
    img: string;
    url: string;
    active: true;
}

export class Company {
    data: CompanyData[];
}
