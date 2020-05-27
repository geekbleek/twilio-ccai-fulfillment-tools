import { TProfile, TItems, TEMPLATES, SIZES } from '../types';

interface IProfileInput {
    items: TItems[];
    width: SIZES;
    title?: string;
}

export const createProfile = ({
    items,
    width,
    title,
}: IProfileInput): TProfile => ({
    template: TEMPLATES.PROFILE,
    items,
    width,
    title,
});
