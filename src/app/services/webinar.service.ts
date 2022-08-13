import Webinar from '../models/webinar.model';
import { read } from './core/firestore.service';

export const getWebinars = async () => {
  if (sessionStorage.getItem('webinars'))
    return JSON.parse(sessionStorage.getItem('webinars'));
  const webinars = (await read(
    'webinars',
    [],
    [{ key: 'date', direction: 'asc' }]
  )) as Webinar[];
  sessionStorage.setItem('webinars', JSON.stringify(webinars));
  return webinars;
};
