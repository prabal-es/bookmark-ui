import { UserData } from './user';
import { CardData } from './card';

export class GroupData {
    uuid: string;
    name: string;
    urlContext: string;
    description: string;
    img: string;
    active: boolean;
    adminUsers: UserData[];
    cards: CardData[];
}

export class Group {
    data: GroupData[];
}
