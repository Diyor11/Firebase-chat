import React from 'react'
import { auth } from '../firebase-config'
import firebase from 'firebase'
import {Button, Nav, NavBrand} from '../globalStyles'

const Navbar = ({user, setUser}) => {

    const outOrIn = () => {
        if(user) return setUser(null)

        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
            .then(res => setUser(res.user))
            .catch(e => console.log('xatooo'))
    }

    return (
        <Nav>
            <NavBrand>Superchat</NavBrand>
            <Button onClick={outOrIn} > {user ? 'Sign out':'Sign in'} </Button>
        </Nav>
    )
}

export default Navbar
