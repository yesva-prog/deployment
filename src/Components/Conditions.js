import React from 'react'
import UserGreeting from './UserGreeting'
import GuestGreetinng from './GuestGreetinng'

function conditions(props) {
    const Loggedin=false
    if(Loggedin){
        return <UserGreeting/>
    }else{
        return<GuestGreetinng/>
    }

}

export default conditions 

