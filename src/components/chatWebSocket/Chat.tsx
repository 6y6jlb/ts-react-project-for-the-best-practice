import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import style from "./Chat.module.css";

type ResponseType = {
    userId: number
    userName: string
    photo: string
    message: string
}

const Chat: React.FC = () => {
    const [message, setMessage] = useState ( '' )
    const [ws, setWs] = useState<WebSocket | null> ( null )
    const [users, setUsers] = useState<ResponseType[]> ( [] )
    const chatRef = useRef<HTMLDivElement> ( null )

    if (ws) {
        ws.onmessage = (messageEvent) => {
            setUsers ( [...users, ...JSON.parse ( messageEvent.data )] )
            chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight )
        }
    }
    useEffect ( () => {
        setWs ( new WebSocket ( 'wss://social-network.samuraijs.com//handlers/ChatHandler.ashx' ) )

    }, [] )


    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage ( e.currentTarget.value )
    }
    const sendMessage = (() => {
        ws?.send ( message )
        setMessage ( '' )
        chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight )
    })

    return (
        <div className={ style.chatFrame }>
            <div ref={ chatRef } className={ style.chat }>
                { users?.map ( (u, i) => {
                    return <div className={ style.self } key={ i }>
                        <img style={ {width: '50px', height: '50px'} }
                             src={ u.photo || "https://via.placeholder.com/50" } alt=""/>
                        <b>{ u.userName }</b>
                        <p>{ u.message }</p>
                    </div>
                } ) }
            </div>

            <div className={ style.textArea }>
                <textarea onChange={ onMessageChange }>{ message }</textarea>
                <button onClick={ sendMessage }>send</button>
            </div>
        </div>
    )
}
export default Chat;