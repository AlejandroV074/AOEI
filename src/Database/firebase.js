import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyADWqwnPPek9kr8RwnxHv2B3WKFExlwj4w",
    authDomain: "aoei-2ceb8.firebaseapp.com",
    projectId: "aoei-2ceb8",
    storageBucket: "aoei-2ceb8.appspot.com",
    messagingSenderId: "1027975025990",
    appId: "1:1027975025990:web:759fafa37aea9f3f004147",
    measurementId: "G-ZPMLJRM0T0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };