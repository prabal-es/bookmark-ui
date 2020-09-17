export class UserData {
    uuid: string;
    name: string;
    urlContext: string;
    role: string;
    img: string;
    url: string;
    active: boolean;
    companyUrlContext: string;
}

export class User {
    data: UserData[];
}
