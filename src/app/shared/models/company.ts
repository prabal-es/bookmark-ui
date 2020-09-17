export class CompanyData {
    uuid: string;
    name: string;
    urlContext: string;
    description: string;
    img: string;
    url: string;
    active: boolean;
    userCount: number;
    groupCount: number;
}

export class Company {
    data: CompanyData[];
}
