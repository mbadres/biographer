import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBoL__-LQI-GNmyhXkupYk3p-VTP5twWv4",
	authDomain: "biographer-aa49f.firebaseapp.com",
	projectId: "biographer-aa49f",
	storageBucket: "biographer-aa49f.appspot.com",
	messagingSenderId: "885901115091",
	appId: "1:885901115091:web:cc9415c601ebf95f1f9e26",
	measurementId: "G-W7WYG2RPYE"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
