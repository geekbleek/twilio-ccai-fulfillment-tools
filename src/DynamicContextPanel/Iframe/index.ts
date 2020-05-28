import { TIframe, TEMPLATES, SIZES } from '../types';

interface IIframeInput {
    width?: SIZES;
    height: string;
    url: string;
    title?: string;
}

export const createIframe = ({
    width,
    height,
    url,
    title,
}: IIframeInput): TIframe => ({
    template: TEMPLATES.IFRAME,
    width: width ?? SIZES.FULL,
    height,
    url,
    title,
});
