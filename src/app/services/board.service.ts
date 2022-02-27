import { read } from './core/realtime-database.service';

export const getBoardData = async () => {
  return await read('/');
};
