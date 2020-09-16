import { UserData } from './user';

export class GroupData {
    uuid: string;
    name: string;
    urlContext: string;
    description: string;
    img: string;
    active: boolean;
    adminUsers: UserData[];
}

export class Group {
    data: GroupData[];
}
