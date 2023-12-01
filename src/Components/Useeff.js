import React, { useEffect, useState } from 'react'

function Useeff() {
  const[count,setcount]=useState(0);
  const [counts,setCounts]=useState(0);

 useEffect(()=>{
 setTimeout(()=>{
   setCounts(count+1)
 },2000)
 },[count]);

  function clicks(){
    setcount(count+1);
  }
  return (
    <div>
     <h1>{count}</h1>
     <h2>{counts}</h2>
     <button onClick={clicks}>+</button>
    </div>
  )
}

export default Useeff



