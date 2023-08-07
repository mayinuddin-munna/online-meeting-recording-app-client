import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.VITE_APIKEY,
  authDomain: import.meta.VITE_AUTHDOMAIN,
  projectId: import.meta.VITE_PROJECTID,
  storageBucket: import.meta.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.VITE_MESSAGINGSENDERID,
  appId: import.meta.VITE_APPID,
};

const app = initializeApp(firebaseConfig);

export default app;
