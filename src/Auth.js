import React from 'react'
import { auth } from './firebase-config'
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat'
import { signInWithPopup } from 'firebase/auth'


const Auth = () => {

    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return (
        <div>
            <h1><button onClick={signIn}>Auth</button></h1>
        </div>
    )
}

export default Auth
