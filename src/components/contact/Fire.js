
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDnoKNmmvwXtwkXadVITYJBBVr83M3r8F8",
    authDomain: "zahinhasanprangon-27ff4.firebaseapp.com",
    databaseURL: "https://zahinhasanprangon-27ff4.firebaseio.com",
    projectId: "zahinhasanprangon-27ff4",
    storageBucket: "zahinhasanprangon-27ff4.appspot.com",
    messagingSenderId: "58619721614",
    appId: "1:58619721614:web:8b89d31857f40645"
  };

const Fire = firebase.initializeApp(config);

export default Fire;