import React from 'react'

function Greeting() {
    const employee=["ejfelkjlewk","esefewd"];
  return (
    <>
    <div>
         {employee.length > 0 && (
           <div>
            <h4>Lists:</h4>
           {employee.map((employe)=>{
              return(<h2>{employe}</h2>)
           })}
         </div>
         )}
    </div>
    </>
  )
}

export default Greeting


