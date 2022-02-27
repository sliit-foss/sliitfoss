import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref } from 'firebase/database';
import { environment } from 'src/environments/environment.prod';

const firebaseConfig = JSON.parse(atob(environment.firebaseConfig));

initializeApp(firebaseConfig);

export const db = getFirestore();
export const realtimeDB = ref(getDatabase());
