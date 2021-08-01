// @flow
import * as React from 'react';
import {useRef, useState} from 'react';

type Props = {
    user: { _id: number, name: string }
    deleteUser: (_id: number) => void
    updateName: (_id: number, name: string|undefined) => void
};
export const User: React.FC<Props> = ({user, deleteUser, updateName}) => {
    const ref = useRef<HTMLInputElement>(null)
    return (
        <div style={ {width: "max-content"} }>
            <button onClick={ () => deleteUser ( user._id ) }> delete user</button>
            <input defaultValue={user.name}  style={ {display: "inline-block"} }  ref={ref}
                   onBlur={ () => updateName ( user._id, ref.current?.value ) }  type="text"/>
        </div>
    );
};