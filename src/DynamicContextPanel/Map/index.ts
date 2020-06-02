import { TMap, TEMPLATES, SIZES } from '../types';

interface IMapInput {
    position?: number;
    geolocation: {
        lat: number;
        lng: number;
    };
    width?: SIZES;
    title?: string;
}

export const createMap = ({
    geolocation,
    width,
    title,
    position,
}: IMapInput): TMap => ({
    template: TEMPLATES.MAP,
    geolocation,
    width: width ?? SIZES.FULL,
    title,
    position,
});
