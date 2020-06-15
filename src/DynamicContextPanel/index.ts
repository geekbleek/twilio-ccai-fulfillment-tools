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
        sync_attributes?: {
            sync_object_type: T;
            data: U;
        };
        routing_attributes?: IStringKeyMap<unknown>;
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
    templates?: TDocumentData,
    routingAttributes?: IStringKeyMap<unknown>
): TDocumentContext => ({
    name: 'sync-attributes',
    lifespan: LIFESPAN,
    parameters: {
        sync_attributes: templates
            ? {
                  sync_object_type: SYNC_OBJECT_TYPES.DOCUMENT,
                  data: templates,
              }
            : undefined,
        routing_attributes: routingAttributes,
    },
});

export const createDynamicContextPanelList = (
    templates?: TListData,
    routingAttributes?: IStringKeyMap<unknown>
): TListContext => ({
    name: 'sync-attributes',
    lifespan: LIFESPAN,
    parameters: {
        sync_attributes: templates
            ? {
                  sync_object_type: SYNC_OBJECT_TYPES.LIST,
                  data: templates,
              }
            : undefined,
        routing_attributes: routingAttributes,
    },
});

export const createDynamicContextPanelMap = (
    templates?: TMapData,
    routingAttributes?: IStringKeyMap<unknown>
): TMapContext => ({
    name: 'sync-attributes',
    lifespan: LIFESPAN,
    parameters: {
        sync_attributes: templates
            ? {
                  sync_object_type: SYNC_OBJECT_TYPES.MAP,
                  data: templates,
              }
            : undefined,
        routing_attributes: routingAttributes,
    },
});
