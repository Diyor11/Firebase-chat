import React from 'react'
import { auth } from '../firebase-config'
import { SignIn } from '../globalStyles'
import firebase from 'firebase'

const Login = ({setUser}) => {


    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
            .then(res => {
                console.log(res.user)
                setUser(res.user)
            })
            .catch(e => console.log('errrror'))
    }

    return (
        <>
          <SignIn onClick={signIn}>
              Sign in with google
          </SignIn>
        </>
    )
}

export default Login
