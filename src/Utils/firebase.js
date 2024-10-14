// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMQevd8HuA49klvdugmZyZ1Aq5Crg27cM",
  authDomain: "netflix-gpt-c7742.firebaseapp.com",
  projectId: "netflix-gpt-c7742",
  storageBucket: "netflix-gpt-c7742.appspot.com",
  messagingSenderId: "366969629078",
  appId: "1:366969629078:web:f37bb068d6390c2e3895b7",
  measurementId: "G-J4KS6ES0JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();