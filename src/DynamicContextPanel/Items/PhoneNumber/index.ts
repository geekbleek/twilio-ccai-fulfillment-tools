import { TItemPhoneNumber, ITEMS, SIZES } from '../../types';

interface IPhoneNumberItemInput {
    title?: string;
    width?: SIZES;
    data: string;
}

export const createPhoneNumberItem = ({
    title,
    width,
    data,
}: IPhoneNumberItemInput): TItemPhoneNumber => ({
    type: ITEMS.PHONE_NUMBER,
    title,
    width: width ?? SIZES.FULL,
    data,
});
