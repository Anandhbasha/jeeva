// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addCount, bgChange,minusCount } from './Slice/Slice'

// const App = () => {
//   const countdata = useSelector((state)=>state.counts.count)
//   const bgdata = useSelector((state)=>state.counts.bg)
//   const dispatch = useDispatch()
//   console.log(bgdata);
  
//   return (
//     <div className='App'>
//       <p>{countdata}</p>
//       <button onClick={()=>dispatch(addCount(1))}>Add Count</button>
//       <button onClick={()=>dispatch(minusCount(1))}>Minus Count</button>
//       <button onClick={()=>dispatch(bgChange("light"))}>{bgdata}</button>
//     </div>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products,setProducts] = useState([])
  const[prodName,setProdName] = useState("")
  const[prodPrice,setProdPrice] = useState("")
  useEffect(()=>{
      const fetchData = async()=>{
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(await res.data)
      }
      fetchData()
  },[])
  const addProduct = async(e)=>{
    e.preventDefault()
    const prod = {
      name:prodName,
      price:prodPrice
    }
    try{
      const res = await axios.post("https://fakestoreapi.com/products",
        prod
      )
      console.log(res.data);
      
    }catch(err){
      console.log(err);
      
    }
  }
  console.log(products);
  
   const updateProd = async(e)=>{
    e.preventDefault()
    const prod = {
      name:prodName,
      price:prodPrice
    }
    try{
      const res = await axios.put("https://fakestoreapi.com/products/1",
        prod
      )
      console.log(res.data);
      
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <div className='App' style={{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"20px"}}>
      {products.map((item)=>(
        <div className='card' style={{width:"300px",height:"800px",backgroundColor:"",border:"1px solid white",display:"flex",flexDirection:"column",gap:"10px",borderRadius:"15px"}}>
        <div className='cardTop' style={{width:"300px",height:"250px"}}>
          <img src={item.image} style={{width:"100%",height:"100%"}}></img>
        </div>
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
        </div> 
      ))}
      {/* <form onSubmit={addProduct}>
        <input type='text' name='prodName' value={prodName} onChange={(e)=>setProdName(e.target.value)}></input>
        <input type='text' name='prodPrice' value={prodPrice} onChange={(e)=>setProdPrice(e.target.value)}></input>
        <button type='submit'>save data</button>
        <button type='submit'>UpdateData data</button>
      </form> */}
      <form onSubmit={updateProd}>
        <input type='text' name='prodName' value={prodName} onChange={(e)=>setProdName(e.target.value)}></input>
        <input type='text' name='prodPrice' value={prodPrice} onChange={(e)=>setProdPrice(e.target.value)}></input>
        <button type='submit'>UpdateData data</button>
      </form>
    </div>
  )
}

export default App