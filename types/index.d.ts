export interface IHeader {
    navigationLinks: INavigationLink[];
}

export interface INavigationLink {
    link: string;
    title: string;
    _key: string;
    number: string;
}
