import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJXC682mMwXlpvBpKNaFeqfR9GSofs2b0",
    authDomain: "node-mcu-16f1f.firebaseapp.com",
    databaseURL: "https://node-mcu-16f1f.firebaseio.com",
    projectId: "node-mcu-16f1f",
    storageBucket: "node-mcu-16f1f.appspot.com",
    messagingSenderId: "227237241114",
    appId: "1:227237241114:web:a64f49c6464ee6b53dcca3",
    measurementId: "G-EH5MWPQQ5M"
};

firebase.initializeApp(firebaseConfig);
export default firebase;