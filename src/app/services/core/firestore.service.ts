import { db } from '../../../config/firebaseConfig';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';

export const read = async (
  collectionName,
  filters = [],
  sorts = [],
  recordLimit = null
) => {
  const collectionRef = collection(db, collectionName);

  let q = query(collectionRef);

  filters.forEach((filter) => {
    q = query(q, where(filter.key, filter.operator, filter.value));
  });

  sorts.forEach((sort) => {
    q = query(q, orderBy(sort.key, sort.direction));
  });

  if (recordLimit) q = query(q, limit(recordLimit));

  return (await getDocs(q)).docs.map((doc) => doc.data());
};
