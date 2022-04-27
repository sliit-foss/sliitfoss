import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { environment } from 'src/environments/environment.prod';

const firebaseConfig = JSON.parse(atob(environment.firebaseConfig));

initializeApp(firebaseConfig);

const auth = getAuth();

signInWithEmailAndPassword(auth, environment.authEmail, environment.authPass);

export const db = getFirestore();
export const realtimeDB = ref(getDatabase());
