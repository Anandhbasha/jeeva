import React, { useContext } from 'react'
import "./Card.css"
import { PassValue } from '../../App'
const Card = ({prodName,prodPrice,prodDesc,image}) => {
    const {setCount} = useContext(PassValue)
  return (
    <div className='Card'>
        <div className='carTop'>
            <img src={image}></img>
        </div>
        <div className='cartBtm'>
            <h2>{prodName}</h2>
            <h2>{prodPrice}</h2>
            <h2>{prodDesc}</h2>
        </div>
        <div className='btn'>
            <button onClick={()=>setCount((prev)=>++prev)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Card