/* eslint-disable @typescript-eslint/camelcase */
import { TTemplates } from './types';

enum SYNC_OBJECT_TYPES {
    DOCUMENT = 'document',
    LIST = 'list',
    MAP = 'map',
}

interface IStringKeyMap<T> {
    [key: string]: T;
}

type TDocumentData = TTemplates[];
type TListData = TTemplates[];
type TMapData = IStringKeyMap<TTemplates>;

type TDatas = TDocumentData | TListData | TMapData;

interface IContext<T extends SYNC_OBJECT_TYPES, U extends TDatas> {
    name: 'sync-attributes';
    lifespan: number;
    parameters: {
        sync_attributes: {
            sync_object_type: T;
            data: U;
        };
    };
}

export type TDocumentContext = IContext<
    SYNC_OBJECT_TYPES.DOCUMENT,
    TDocumentData
>;
export type TListContext = IContext<SYNC_OBJECT_TYPES.LIST, TListData>;
export type TMapContext = IContext<SYNC_OBJECT_TYPES.MAP, TMapData>;

const LIFESPAN = 99;

export const createDynamicContextPanelDocument = (
    templates: TDocumentData
): TDocumentContext => ({
    name: 'sync-attributes',
    lifespan: LIFESPAN,
    parameters: {
        sync_attributes: {
            sync_object_type: SYNC_OBJECT_TYPES.DOCUMENT,
            data: templates,
        },
    },
});

export const createDynamicContextPanelList = (
    templates: TListData
): TListContext => ({
    name: 'sync-attributes',
    lifespan: LIFESPAN,
    parameters: {
        sync_attributes: {
            sync_object_type: SYNC_OBJECT_TYPES.LIST,
            data: templates,
        },
    },
});

export const createDynamicContextPanelMap = (
    templates: TMapData
): TMapContext => ({
    name: 'sync-attributes',
    lifespan: LIFESPAN,
    parameters: {
        sync_attributes: {
            sync_object_type: SYNC_OBJECT_TYPES.MAP,
            data: templates,
        },
    },
});
