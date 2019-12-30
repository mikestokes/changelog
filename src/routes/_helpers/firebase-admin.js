import * as admin from 'firebase-admin';
import serviceAccount from './service-account.js';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://productlogdotdev.firebaseio.com'
});

export let db = admin.firestore();
