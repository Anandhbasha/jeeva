//  npm i react-router-dom
import React, { createContext, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import MensShirt from "./assets/Images/Shirt.jpg"
export const PassValue = createContext()
const App = () => {
  const Products = [
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    }
    ,{
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    }
    ,{
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    }
  ]
  const [count,setCount] = useState(0)
  return (
    <BrowserRouter>
      <PassValue.Provider value={{Products,count,setCount}}>
        <div className='App'>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<All/>}/>
          <Route path="/mens" element={<Mens/>}/>
          <Route path="/womens" element={<Womens/>}/>
        </Routes>
      </PassValue.Provider>
    </BrowserRouter>
  )
}

export default App