import { TCard, TItems, TEMPLATES, SIZES } from '../types';

interface ICardInput {
    items: TItems[];
    width?: SIZES;
    title?: string;
}

export const createCard = ({ items, width, title }: ICardInput): TCard => ({
    template: TEMPLATES.CARD,
    items,
    width: width ?? SIZES.FULL,
    title,
});
