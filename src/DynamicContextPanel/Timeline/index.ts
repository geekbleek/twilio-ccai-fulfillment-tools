import { TTimeline, TEMPLATES, SIZES } from '../types';

interface ITimelineInput {
    items: Array<{
        title: string;
        subtitle: string;
    }>;
    width: SIZES;
    title?: string;
}

export const createTimeline = ({
    items,
    width,
    title,
}: ITimelineInput): TTimeline => ({
    template: TEMPLATES.TIMELINE,
    items,
    width,
    title,
});
