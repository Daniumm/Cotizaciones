import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYOauGIPG3HehpC-piJQtJBJjxJg8B0II",
  authDomain: "cotizaciones-5e50b.firebaseapp.com",
  projectId: "cotizaciones-5e50b",
  storageBucket: "cotizaciones-5e50b.appspot.com",
  messagingSenderId: "881829576778",
  appId: "1:881829576778:web:7b9ba49fb2672ffcaa26b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { firebase: app, auth };
