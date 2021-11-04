
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCeuj3FLiVXgWw_AQBN1ojw9WYzDeRIS0",
  authDomain: "chatrealtime-217ba.firebaseapp.com",
  databaseURL: "https://chatrealtime-217ba-default-rtdb.firebaseio.com",
  projectId: "chatrealtime-217ba",
  storageBucket: "chatrealtime-217ba.appspot.com",
  messagingSenderId: "744440741968",
  appId: "1:744440741968:web:ed21701ca4a65489be5155"
};


const Firebase = initializeApp(firebaseConfig);
export const db = getDatabase(Firebase);
