// @flow
import * as React from 'react';
import {User} from "../User/User";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

type Props = {

};

export function UsersMongoRequest(props: Props) {

    const [users, setUsers] = useState ( [] as Array<{ _id: number, name: string }> )
    const inputRef = useRef<HTMLInputElement> ( null )

    const getUsers = () => {
        axios.get ( 'http://localhost:8080/users' + window.location.search ).then ( res => {
            setUsers ( res.data )
        } )
    }

    useEffect ( () => {
        getUsers ()
    }, [] )

    const pushUser = () => {
        axios.post ( 'http://localhost:8080/users', {name: inputRef.current?.value} ).then ( res => getUsers () )
    }
    const deleteUser = (id: number) => {
        if (id) axios.delete ( `http://localhost:8080/users/${ id }`, ).then ( res => getUsers () )
        else console.warn ( id + ' user' )

    }
    const updateName = (id: number, name: string|undefined) => {
        if (id && name) axios.put ( `http://localhost:8080/users`,{id,name} ).then ( res => getUsers () )
        else console.warn ( id + ' user' )

    }
    return (
        <div>
            { users.map ( u => <User updateName={updateName} deleteUser={ deleteUser } key={ u._id } user={ u }/> ) }
            <input ref={ inputRef } type="text"/>
            <button onClick={ pushUser }>push user</button>
        </div>


);
};