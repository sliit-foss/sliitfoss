import Webinar from '../models/webinar.model';
import { read } from './core/firestore.service';

export const getWebinars = () => {
  return (read(
    'webinars',
    [],
    [{ key: 'date', direction: 'asc' }]
  ) as unknown) as Webinar[];
};
