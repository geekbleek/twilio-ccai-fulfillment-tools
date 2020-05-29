import { TMapContext } from '..';
import { GoogleCloudDialogflowV2WebhookRequest } from 'actions-on-google';
import { WebhookClient } from 'dialogflow-fulfillment';

import { addIntentsToMapContext } from './addIntentsToMapContext';

export const createMapHandler = (
    createContext: () => TMapContext | undefined,
    dfRequest: GoogleCloudDialogflowV2WebhookRequest
) => (agent: WebhookClient): void => {
    if (dfRequest.queryResult?.fulfillmentText) {
        agent.add(dfRequest.queryResult.fulfillmentText);
    }
    const mapContext = createContext();
    if (mapContext) {
        addIntentsToMapContext(mapContext, dfRequest);
        agent.setContext(mapContext);
    }
};
