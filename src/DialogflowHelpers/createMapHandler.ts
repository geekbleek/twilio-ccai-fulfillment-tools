import { TMapContext } from '..';
import { GoogleCloudDialogflowV2WebhookRequest } from 'actions-on-google';
import { ApiClientObjectMap } from 'actions-on-google/dist/common';
import { WebhookClient } from 'dialogflow-fulfillment';

import { addIntentsToMapContext } from './addIntentsToMapContext';

export const createMapHandler = (
    createContext: () => TMapContext | undefined
) => (
    agent: WebhookClient,
    dfRequest: GoogleCloudDialogflowV2WebhookRequest,
    parameters?: ApiClientObjectMap<string>
): void => {
    if (dfRequest.queryResult?.fulfillmentText) {
        agent.add(dfRequest.queryResult.fulfillmentText);
    }
    const mapContext = createContext();
    if (mapContext) {
        addIntentsToMapContext(mapContext, dfRequest, parameters);
        agent.setContext(mapContext);
    }
};
