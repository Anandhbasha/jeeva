import React, { useState } from 'react'
// rafce ->React arrow function component export
const App = () => {
  let [count,setCount] = useState(0)
  const handleAdd = ()=>{
    setCount(++count)
    console.log(count);    
  }
  return (
    <div className='App'>
      <button onClick={handleAdd}>Add {count}</button>
    </div>
  )
}

export default App