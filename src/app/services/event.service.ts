import Event from '../models/event.model';
import { read } from './core/firestore.service';

export const getPastEvents = () => {
  return (read(
    'events',
    [{ key: 'upcoming', value: false, operator: '==' }],
    [{ key: 'date', direction: 'desc' }]
  ) as unknown) as Event[];
};

export const getUpcomingEvents = () => {
  return (read(
    'events',
    [{ key: 'upcoming', value: true, operator: '==' }],
    [{ key: 'date', direction: 'desc' }]
  ) as unknown) as Event[];
};
