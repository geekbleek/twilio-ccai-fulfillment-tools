import { WebhookClient } from 'dialogflow-fulfillment';

import { IStringKeyMap } from '../DynamicContextPanel';

export const addRoutingAttributesContext = (
    attributes: IStringKeyMap<unknown>
) => (agent: WebhookClient): void => {
    agent.setContext({
        name: 'routing-attributes',
        lifespan: 99,
        parameters: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            routing_attributes: attributes,
        },
    });
};
