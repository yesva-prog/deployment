import React, { useEffect } from 'react'

function Ref() {
    const inputref=React.createRef();

    useEffect(()=>{
        inputref.current.focus();
    })
  return (
    <div>
      <input type="text" ref={inputref} placeholder='enter name'/>
    
    </div>
  )
}

export default Ref
