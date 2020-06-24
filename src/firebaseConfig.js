import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
var Config = {
    apiKey: "AIzaSyCvYlsTL4J-MPEkqtsWnDAgDCWBBD_Lm6c",
    authDomain: "testq-70155.firebaseapp.com",
    databaseURL: "https://testq-70155.firebaseio.com",
    projectId: "testq-70155",
    storageBucket: "testq-70155.appspot.com",
    messagingSenderId: "1022127045206",
    appId: "1:1022127045206:web:e64ef3e9258365535fd9f7"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
