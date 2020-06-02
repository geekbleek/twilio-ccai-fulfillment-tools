import { TTimeline, TEMPLATES, SIZES } from '../types';

interface ITimelineInput {
    position?: number;
    items: Array<{
        title: string;
        subtitle: string;
    }>;
    width?: SIZES;
    title?: string;
}

export const createTimeline = ({
    items,
    width,
    title,
    position,
}: ITimelineInput): TTimeline => ({
    template: TEMPLATES.TIMELINE,
    items,
    width: width ?? SIZES.FULL,
    title,
    position,
});
