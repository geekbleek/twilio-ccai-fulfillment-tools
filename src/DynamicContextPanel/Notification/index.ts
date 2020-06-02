import { TNotification, TEMPLATES } from '../types';

interface INotificationInput {
    title?: string;
    position?: number;
    type: 'success' | 'error';
    text: string;
}

export const createNotification = ({
    title,
    type,
    text,
    position,
}: INotificationInput): TNotification => ({
    template: TEMPLATES.NOTIFICATION,
    title,
    type,
    text,
    position,
});
