import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBAqyyuFsQIcs2Ej8GlaqXBU0wgi7t1sPI",
  authDomain: "wearrish-db.firebaseapp.com",
  databaseURL: "https://wearrish-db.firebaseio.com",
  projectId: "wearrish-db",
  storageBucket: "wearrish-db.appspot.com",
  messagingSenderId: "201615552751",
  appId: "1:201615552751:web:7aae71a00ccc9a3d7b6b1a",
  measurementId: "G-YQQBHSMSPS"
};
export const createUserProfile = async (userAuth, data) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const dbSnapShot = await userRef.get();
  if (!dbSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
