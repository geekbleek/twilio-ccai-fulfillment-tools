import { TDetail, TItems, TEMPLATES, SIZES } from '../types';

interface IDetailInput {
    items: TItems[];
    position?: number;
    width?: SIZES;
    title?: string;
}

export const createDetail = ({
    items,
    width,
    title,
    position,
}: IDetailInput): TDetail => ({
    template: TEMPLATES.DETAIL,
    items,
    width: width ?? SIZES.FULL,
    title,
    position,
});
