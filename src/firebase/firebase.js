import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCVvtK_PWc8FNGP3UvsL4GAxOt_Ob9k168',
  authDomain: 'dataio-a7ec6.firebaseapp.com',
  databaseURL: 'https://dataio-a7ec6-default-rtdb.firebaseio.com',
  projectId: 'dataio-a7ec6',
  storageBucket: 'dataio-a7ec6.appspot.com',
  messagingSenderId: '578013171836',
  appId: '1:578013171836:web:65de36cf62d6e4933cf9f9',
  measurementId: 'G-10MV6NPKSP',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
