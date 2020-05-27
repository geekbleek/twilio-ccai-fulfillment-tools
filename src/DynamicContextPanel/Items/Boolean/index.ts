import { TItemBoolean, ITEMS, SIZES } from '../../types';

interface IBooleanItemInput {
    title?: string;
    width: SIZES;
    data: string;
}

export const createBooleanItem = ({
    title,
    width,
    data,
}: IBooleanItemInput): TItemBoolean => ({
    type: ITEMS.BOOLEAN,
    title,
    width,
    data,
});
