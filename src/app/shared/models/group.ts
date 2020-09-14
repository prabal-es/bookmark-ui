export class GroupData {
    uuid: string;
    name: string;
    description: string;
    img: string;
    urlContext: string;
    active: boolean;
}

export class Group {
    data: GroupData[];
}
