import { TDetail, TItems, TEMPLATES, SIZES } from '../types';

interface IDetailInput {
    items: TItems[];
    width?: SIZES;
    title?: string;
}

export const createDetail = ({
    items,
    width,
    title,
}: IDetailInput): TDetail => ({
    template: TEMPLATES.DETAIL,
    items,
    width: width ?? SIZES.FULL,
    title,
});
