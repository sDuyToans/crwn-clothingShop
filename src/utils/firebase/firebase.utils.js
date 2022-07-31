import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-JCsHBy6Tt0BYcge1XsyGQqlsgUgitbo",
  authDomain: "crwn-clothingshop-96e2b.firebaseapp.com",
  projectId: "crwn-clothingshop-96e2b",
  storageBucket: "crwn-clothingshop-96e2b.appspot.com",
  messagingSenderId: "1050242779298",
  appId: "1:1050242779298:web:8d8ea187c0fc2029e0effb",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
  return userDocRef;
  //if user data does not exit

  //create / set the document with the data from userAuth in my collection

  // if user data exist

  //return userDocRef
};
