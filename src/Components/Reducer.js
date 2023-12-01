import React, { useReducer } from 'react'
const initialState=0;
function reducer(state,action){
 switch(action.type){
    case "increment":
        return state+1
    case "decrement":
        return state-1
    default:
        throw new Error;
 }
}
function Reducer() {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
       <h2>{state}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
  )
}

export default Reducer

