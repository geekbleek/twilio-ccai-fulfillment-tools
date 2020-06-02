import { TCard, TItems, TEMPLATES, SIZES } from '../types';

interface ICardInput {
    items: TItems[];
    position?: number;
    width?: SIZES;
    title?: string;
}

export const createCard = ({
    items,
    width,
    title,
    position,
}: ICardInput): TCard => ({
    template: TEMPLATES.CARD,
    items,
    width: width ?? SIZES.FULL,
    title,
    position,
});
