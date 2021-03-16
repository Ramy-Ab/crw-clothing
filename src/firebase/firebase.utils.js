import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYuhPVDgS3Us_Kttlm1-mh1a7Z_sr9paE",
    authDomain: "crwn-a42f3.firebaseapp.com",
    projectId: "crwn-a42f3",
    storageBucket: "crwn-a42f3.appspot.com",
    messagingSenderId: "168907493382",
    appId: "1:168907493382:web:71cef622fd98fbbf1e3387",
    measurementId: "G-W1VDWNSKQR"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) =>{
      if (!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot =  userRef.get();
      if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ',error.message);
        }
      }
      return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;