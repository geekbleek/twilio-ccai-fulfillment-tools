// COMMON
export enum SIZES {
    FULL = 'full',
    HALF = 'half',
    TWO_THIRD = 'two-third',
    THIRD = 'third',
}

// ITEMS
export enum ITEMS {
    BOOLEAN = 'boolean',
    IMAGE = 'image',
    PHONE_NUMBER = 'phoneNumber',
    TEXT = 'text',
}

export interface IItem<T extends ITEMS> {
    title?: string;
    type: T;
    width: SIZES;
    data: string;
}

export type TItemBoolean = IItem<ITEMS.BOOLEAN>;
export type TItemImage = IItem<ITEMS.IMAGE>;
export type TItemPhoneNumber = IItem<ITEMS.PHONE_NUMBER>;
export type TItemText = IItem<ITEMS.TEXT>;

export type TItems = TItemBoolean | TItemImage | TItemPhoneNumber | TItemText;

// TEMPLATES
export enum TEMPLATES {
    CARD = 'card',
    DETAIL = 'detail',
    IFRAME = 'iframe',
    MAP = 'map',
    NOTIFICATION = 'notification',
    PROFILE = 'profile',
    TIMELINE = 'timeline',
}

export interface ITemplate<T extends TEMPLATES> {
    title?: string; // TODO Can every template have a title?
    position?: number;
    template: T;
}

export type TCard = ITemplate<TEMPLATES.CARD> & {
    width: SIZES;
    items: TItems[];
};
export type TDetail = ITemplate<TEMPLATES.DETAIL> & {
    width: SIZES;
    items: TItems[];
};
export type TIframe = ITemplate<TEMPLATES.IFRAME> & {
    width: SIZES;
    height: string;
    url: string;
};
export type TNotification = ITemplate<TEMPLATES.NOTIFICATION> & {
    type: 'success' | 'error'; // TODO what are these values?
    text: string;
};
export type TMap = ITemplate<TEMPLATES.MAP> & {
    width: SIZES;
    geolocation: {
        lat: number;
        lng: number;
    };
};
export type TProfile = ITemplate<TEMPLATES.PROFILE> & {
    width: SIZES;
    items: TItems[];
};
export type TTimeline = ITemplate<TEMPLATES.TIMELINE> & {
    width: SIZES;
    // TODO this items key doesn't follow the other items pattern
    items: Array<{
        title: string;
        subtitle: string;
    }>;
};

export type TTemplates =
    | TCard
    | TDetail
    | TIframe
    | TNotification
    | TMap
    | TProfile
    | TTimeline;
