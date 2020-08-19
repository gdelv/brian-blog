import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB-Pb37Xh3g6MPskvVFr0rAzB4njC0CLTQ",
    authDomain: "brian-blog-432d0.firebaseapp.com",
    databaseURL: "https://brian-blog-432d0.firebaseio.com",
    projectId: "brian-blog-432d0",
    storageBucket: "brian-blog-432d0.appspot.com",
    messagingSenderId: "932167429311",
    appId: "1:932167429311:web:4863d5f0493f06d9b2aa0a",
    measurementId: "G-Y52PC8F65D"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase