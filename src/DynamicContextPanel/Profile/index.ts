import { TProfile, TItems, TEMPLATES, SIZES } from '../types';

interface IProfileInput {
    items: TItems[];
    position?: number;
    width?: SIZES;
    title?: string;
}

export const createProfile = ({
    items,
    width,
    title,
    position,
}: IProfileInput): TProfile => ({
    template: TEMPLATES.PROFILE,
    items,
    width: width ?? SIZES.FULL,
    title,
    position,
});
