import { TItemImage, ITEMS, SIZES } from '../../types';

interface IImageItemInput {
    title?: string;
    width?: SIZES;
    data: string;
}

export const createImageItem = ({
    title,
    width,
    data,
}: IImageItemInput): TItemImage => ({
    type: ITEMS.IMAGE,
    title,
    width: width ?? SIZES.FULL,
    data,
});
