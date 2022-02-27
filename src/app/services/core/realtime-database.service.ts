import { realtimeDB } from '../../../config/firebaseConfig';
import { child, get } from 'firebase/database';

export const read = async (path) => {
  let result;
  await get(child(realtimeDB, path))
    .then((snapshot) => {
      if (snapshot.exists()) result = snapshot.val();
    })
    .catch((error) => {
      console.error(error);
    });
  return result;
};
