import { TMap, TEMPLATES, SIZES } from '../types';

interface IMapInput {
    geolocation: {
        lat: number;
        lng: number;
    };
    width: SIZES;
    title?: string;
}

export const createMap = ({ geolocation, width, title }: IMapInput): TMap => ({
    template: TEMPLATES.MAP,
    geolocation,
    width,
    title,
});
