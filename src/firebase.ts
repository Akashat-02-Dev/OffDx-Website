import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDg9nmCPgG6fwkAcPplbDdEpRPzBuDep8o",
  authDomain: "offdx-714fc.firebaseapp.com",
  projectId: "offdx-714fc",
  storageBucket: "offdx-714fc.firebasestorage.app",
  messagingSenderId: "1017377160822",
  appId: "1:1017377160822:web:71ac638df126211b74a957",
  measurementId: "G-V6Q9CFEP0W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
