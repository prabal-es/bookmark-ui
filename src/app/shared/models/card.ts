export class CardData {
    uuid: string;
    name: string;
    description: string;
    tinyUrl: string;
    detailUrl: string;
    img: string;
    type: string;
    createdAt: number;
    expireAt: number;
    companyContext: string;
    userContext: string;
    active: boolean;
}

export class Card {
    data: CardData[];
}
