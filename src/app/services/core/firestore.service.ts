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

  sorts.forEach((sort) => {
    q = query(collectionRef, orderBy(sort.key, sort.direction));
  });

  filters.forEach((filter) => {
    q = query(collectionRef, where(filter.key, filter.operator, filter.value));
  });

  if (recordLimit) q = query(collectionRef, limit(recordLimit));

  return (await getDocs(q)).docs.map((doc) => doc.data());
};
