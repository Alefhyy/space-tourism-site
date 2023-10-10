export interface IHeader {
    navigationLinks: INavigationLink[];
}

export interface INavigationLink {
    link: string;
    title: string;
    _key: string;
    number: string;
}

export interface IDestination {
    number: string;
    title: string;
    tabs: ITabs[];
    cards: ICards[];
}

export interface ITabs {
    _key: string;
    link: string;
}

export interface ICards {
    _key: string;
    averageDistanceTitle: string;
    averageDistanceNumber: string;
    cardText: string;
    cardTitle: string;
    estimatedTimeTitle: string;
    estimatedTimeNumber: string;
    // imageSrc: string;
    // imageAlt: string;
}