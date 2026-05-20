import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassValue } from '../../App'
import "./All.css"

const All = () => {
  const {Products} = useContext(PassValue)
  return (
    <div className='All'>
      {Products.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default All