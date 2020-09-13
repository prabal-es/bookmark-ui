export class CompanyData {
    uuid: string;
    name: string;
    description: string;
    img: string;
    url: string;
    active: boolean;
    userCount: number;
}

export class Company {
    data: CompanyData[];
}
