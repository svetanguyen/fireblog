import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAT_u-IIVopl5lKtaFpAh2C_CgbsJz1XlM",
    authDomain: "fireblog-d6861.firebaseapp.com",
    projectId: "fireblog-d6861",
    storageBucket: "fireblog-d6861.appspot.com",
    messagingSenderId: "61579665151",
    appId: "1:61579665151:web:2d057ba007bcd5ac37f6ca"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();