import { TItemText, ITEMS, SIZES } from '../../types';

interface ITextItemInput {
    title?: string;
    width: SIZES;
    data: string;
}

export const createTextItem = ({
    title,
    width,
    data,
}: ITextItemInput): TItemText => ({
    type: ITEMS.TEXT,
    title,
    width,
    data,
});
