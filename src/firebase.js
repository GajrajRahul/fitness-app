import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBRJOxRk7mrrBjGBSEUc0cufMIS_wHa3N8",
  authDomain: "fitness-app-6e2dc.firebaseapp.com",
  projectId: "fitness-app-6e2dc",
  storageBucket: "fitness-app-6e2dc.appspot.com",
  messagingSenderId: "785373849609",
  appId: "1:785373849609:web:5a56e245aaa1d6aad4b0d8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();