import { GoogleCloudDialogflowV2Context } from 'actions-on-google';

export const findContext = (
    contains: string,
    contexts?: GoogleCloudDialogflowV2Context[]
): GoogleCloudDialogflowV2Context | undefined => {
    return contexts
        ? contexts.find(
              (context) => context.name && context.name.indexOf(contains) > -1
          )
        : undefined;
};
