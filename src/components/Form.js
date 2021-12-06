import React, {useState} from 'react'
import { Form } from '../globalStyles'
import { auth, db } from '../firebase-config'
import firebase from 'firebase'

const FormMsg = ({scroll}) => {
    const [value, setValue] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        setValue('')
        const {uid, photoURL} = auth.currentUser
        if(e.target[0].value) {
            await db.collection('messages').add({
                text: e.target[0].value,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }

        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Form onSubmit={e => sendMessage(e)} >
            <input type='text' placeholder='write here' value={value} onChange={e => setValue(e.target.value)} />
            <button>Send</button>
        </Form>
    )
}

export default FormMsg
