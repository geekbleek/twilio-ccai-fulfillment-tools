import {
    TMapContext,
    TItemText,
    createTextItem,
    createDetail,
    SIZES,
} from '..';
import { ApiClientObjectMap } from 'actions-on-google/dist/common';
import { GoogleCloudDialogflowV2WebhookRequest } from 'actions-on-google';

export const addIntentsToMapContext = (
    mapContext: TMapContext,
    dfRequest: GoogleCloudDialogflowV2WebhookRequest,
    parameters?: ApiClientObjectMap<string>
): TMapContext => {
    if (parameters) {
        const intentParams: TItemText[] = [];
        Object.keys(parameters).forEach((param) => {
            intentParams.push(
                createTextItem({
                    title: `Intent Param: ${param}`,
                    data: parameters[param],
                })
            );
        });

        mapContext.parameters.sync_attributes.data[
            'HELPERS_CURRENT_INTENT'
        ] = createDetail({
            width: SIZES.THIRD,
            items: [
                createTextItem({
                    title: 'Current Intent',
                    data:
                        dfRequest.queryResult?.intent?.displayName ||
                        'No intent detected',
                }),
            ],
        });

        mapContext.parameters.sync_attributes.data[
            'HELPERS_INTENT_DETAILS'
        ] = createDetail({
            width: SIZES.TWO_THIRD,
            items:
                intentParams ??
                createTextItem({
                    title: 'Intent Params',
                    data: 'No parameters',
                }),
        });
    }

    return mapContext;
};
