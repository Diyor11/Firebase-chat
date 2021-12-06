import React, { useEffect, useState, useRef } from 'react'
import MessageCom from './MessageCom'
import { ChatCom, Main } from '../globalStyles'
import { db, auth } from '../firebase-config'
import FormMsg from './Form'

const Chat = () => {
    const scroll = useRef()

    const [messages, setMessages] = useState([])

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    

    return (
        <ChatCom>
            <Main >
                {
                    messages && messages.map(({photoURL, uid, text}) => <MessageCom key={uid} img={photoURL} msg={text} send={auth.currentUser.uid === uid} />)
                }
                <span ref={scroll} ></span>
            </Main>
            <FormMsg scroll={scroll} />
        </ChatCom>
    )
}

export default Chat
