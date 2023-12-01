import React from 'react'
import { UserContext } from '../App'

function Contnet() {
  return (
    <div>
      <UserContext.Consumer>
        {value =><div>{value}</div>}
      </UserContext.Consumer>
      
    </div>
  )
}

export default Contnet
