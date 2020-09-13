export class UserData {
    uuid: string;
    name: string;
    role: string;
    img: string;
    url: string;
    active: boolean;
}

export class User {
    data: UserData[];
}
