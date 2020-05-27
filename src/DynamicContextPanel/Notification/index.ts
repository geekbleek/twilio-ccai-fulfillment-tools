import { TNotification, TEMPLATES } from '../types';

interface INotificationInput {
    title?: string;
    type: 'success' | 'error';
    text: string;
}

export const createNotification = ({
    title,
    type,
    text,
}: INotificationInput): TNotification => ({
    template: TEMPLATES.NOTIFICATION,
    title,
    type,
    text,
});
