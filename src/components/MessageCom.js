import React from 'react'
import styled from 'styled-components'

const Message = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    display: flex;
    align-items: center;
    justify-content: ${({send}) => (send ? 'flex-end':'flex-start')};
    margin: 8px 0;
    .img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 3px;
        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
        }
    }
    .msg{
        font-size: 16px;
        background-color: ${({send, theme}) => (send ? theme.primary:'#ddd')};
        color: ${({send}) => (send ? '#fff':'#000')};
        padding: 5px 10px;
        border-radius: 7px;
        font-family: 'Roboto', sans-serif;
        max-width: 72%;
    }
`

const MessageCom = ({img, msg, send }) => {
    return (
        <Message send={send} >
            {!send && <div className='img'>
                        <img src={img} alt='' />
                    </div>
            }
            <div className='msg'>
                {msg}
            </div>
            {send && <div className='img'>
                        <img src={img} alt='' />
                    </div>
            }
        </Message>
    )
}

export default MessageCom
