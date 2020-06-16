import { WebhookClient } from 'dialogflow-fulfillment';

import { IStringKeyMap } from '../DynamicContextPanel';

export const addTaskAttributesContext = (
    attributes: IStringKeyMap<unknown>
) => (agent: WebhookClient): void => {
    agent.setContext({
        name: 'task-attributes',
        lifespan: 99,
        parameters: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            task_attributes: attributes,
        },
    });
};
