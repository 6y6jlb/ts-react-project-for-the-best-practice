import React, {useCallback, useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';


export default {
  title: 'useMemo and React.memo',
} as Meta;


const NotMemorizedValue = (props:any) =>{

  return <div>{props.count}</div>
}

const Value = React.memo(NotMemorizedValue)


const NotMemorizedUsers = (props:any) =>{

  const users = [
    {name:'first'},
    {name:'second'},
    {name:'third'},
  ]
  return <div>{users.map(i=>{
    return <div onClick={props.callBack} key={i.name}>{i.name}</div>
  })}</div>
}

const Users = React.memo(NotMemorizedUsers)

export const ReactMemo:Story<any> = (args) => {
  const [count, setCount] = useState<number>(1)



  function usersCallback() {
    console.log('renderUsers calback')
  }
  const memorizedCallBack = useCallback( usersCallback,[])

  return <>
  <button onClick={()=>setCount(count+1)}>+</button>
    <Value count={count}/>
    <Users callBack={memorizedCallBack}/>
  </>
}
