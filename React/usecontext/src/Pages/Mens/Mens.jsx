import { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassValue } from '../../App'

const Mens = () => {
  const {Products} = useContext(PassValue)
  console.log(Products);
  
  const mensProduct = Products.filter((item)=>item.prodCat==="Mens")
  console.log(mensProduct);
  
  return (
    <div className='Mens'>
      {mensProduct.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default Mens