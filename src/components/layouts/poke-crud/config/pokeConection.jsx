import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXGc40QPuGF799TLLRx46An9yX5i_wBcI",
  authDomain: "pokecrud-back.firebaseapp.com",
  projectId: "pokecrud-back",
  storageBucket: "pokecrud-back.appspot.com",
  messagingSenderId: "538272723386",
  appId: "1:538272723386:web:f577e44e5d2a95b4a42d83"
};

const app = initializeApp(firebaseConfig);
export const dataBase=getFirestore(app)