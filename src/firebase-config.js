import firebase from "firebase"

const App = firebase.initializeApp({
    apiKey: "AIzaSyBKXBKDkQ5w2CxbsXXqnj4Ea_d2wnVqX_U",
    authDomain: "real-time-chat-65d37.firebaseapp.com",
    projectId: "real-time-chat-65d37",
    storageBucket: "real-time-chat-65d37.appspot.com",
    messagingSenderId: "681504421630",
    appId: "1:681504421630:web:cac3906cb4cd7352acd7af",
    measurementId: "G-V3PZELE8CQ"
})

export const db = App.firestore()

export const auth = firebase.auth()