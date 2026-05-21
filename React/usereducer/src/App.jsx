// import React, { useReducer } from 'react'

// const App = () => {
//   const reducer = (state,action)=>{
//     switch(action.type){
//       case "count":
//         return {...state,count:state.count+1}
//       case "bg":
//         return{...state,bg:state.bg==="dark"?"light":"dark"}
//       case "login":
//         return{...state,login:state.login==="logout"?"login":"logout"}
//     }
//   }
//   const [state,dispatch] = useReducer(reducer,{count:0,bg:"dark",login:"logout"})
//   return (
//     <div className='App' style={{height:"100vh",backgroundColor:state.bg==="dark"?"black":"white"}}>
//       <p>{state.count}</p>
//       <button onClick={()=>dispatch({type:"count"})}>count</button>
//       <button onClick={()=>dispatch({type:"bg"})}>Bg</button>
//       <button onClick={()=>dispatch({type:"login"})}>{state.login}</button>
//     </div>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    const fetchProduct = async()=>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products")
        if(!res){
          throw Error ("Unable to connect API")
        }
        setProduct(await res.data)

      }catch(e){
        console.log(e);
        
      }
    }
    fetchProduct()
  },[])
  console.log(product);
  
  return (
    <div className='App' style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
      {product.map((item)=>(
        <div className='card' style={{width:"300px",height:"600px",
          backgroundColor:"white"
        }}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  )
}

export default App