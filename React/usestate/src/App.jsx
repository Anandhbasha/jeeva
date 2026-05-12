import React, { useState } from 'react'

const App = () => {
  const [search,setSearch] = useState("")
  const [limit,setLimit] = useState(5)
  const Users = [
    { id: 1, name: "Arun", course: "React", city: "Chennai" },
    { id: 2, name: "Bala", course: "Python", city: "Madurai" },
    { id: 3, name: "Charan", course: "Java", city: "Coimbatore" },
    { id: 4, name: "Divya", course: "React", city: "Salem" },
    { id: 5, name: "Eswar", course: "C++", city: "Trichy" },
    { id: 6, name: "Farook", course: "Python", city: "Chennai" },
    { id: 7, name: "Gokul", course: "React", city: "Erode" },
    { id: 8, name: "Hari", course: "Java", city: "Madurai" },
    { id: 9, name: "Indhu", course: "C", city: "Vellore" },
    { id: 10, name: "Jeeva", course: "React", city: "Chennai" },
    { id: 11, name: "Karthik", course: "Python", city: "Salem" },
    { id: 12, name: "Lavanya", course: "Java", city: "Trichy" },
    { id: 13, name: "Manoj", course: "React", city: "Coimbatore" },
    { id: 14, name: "Naveen", course: "C++", city: "Erode" },
    { id: 15, name: "Oviya", course: "Python", city: "Chennai" },
    { id: 16, name: "Prabhu", course: "Java", city: "Madurai" },
    { id: 17, name: "Queen", course: "React", city: "Salem" },
    { id: 18, name: "Raja", course: "C", city: "Trichy" },
    { id: 19, name: "Sathish", course: "Python", city: "Vellore" },
    { id: 20, name: "Tamil", course: "React", city: "Chennai" },
    { id: 21, name: "Udhay", course: "Java", city: "Erode" },
    { id: 22, name: "Varun", course: "React", city: "Madurai" },
    { id: 23, name: "Waseem", course: "Python", city: "Salem" },
    { id: 24, name: "Xavier", course: "C++", city: "Coimbatore" },
    { id: 25, name: "Yamini", course: "React", city: "Trichy" },
    { id: 26, name: "Zahir", course: "Java", city: "Chennai" },
    { id: 27, name: "Aakash", course: "Python", city: "Madurai" },
    { id: 28, name: "Bhuvana", course: "React", city: "Vellore" },
    { id: 29, name: "Cibi", course: "C", city: "Salem" },
    { id: 30, name: "Deepak", course: "Java", city: "Trichy" },
    { id: 31, name: "Ezhil", course: "React", city: "Coimbatore" },
    { id: 32, name: "Fathima", course: "Python", city: "Chennai" },
    { id: 33, name: "Ganesh", course: "C++", city: "Madurai" },
    { id: 34, name: "Hemalatha", course: "React", city: "Erode" },
    { id: 35, name: "Irfan", course: "Java", city: "Salem" },
    { id: 36, name: "Janani", course: "Python", city: "Trichy" },
    { id: 37, name: "Kavin", course: "React", city: "Vellore" },
    { id: 38, name: "Lokesh", course: "C", city: "Chennai" },
    { id: 39, name: "Madhan", course: "Java", city: "Madurai" },
    { id: 40, name: "Nisha", course: "React", city: "Salem" },
    { id: 41, name: "Omprakash", course: "Python", city: "Coimbatore" },
    { id: 42, name: "Priya", course: "React", city: "Trichy" },
    { id: 43, name: "Ramesh", course: "C++", city: "Erode" },
    { id: 44, name: "Sindhu", course: "Java", city: "Chennai" },
    { id: 45, name: "Tharun", course: "React", city: "Madurai" },
    { id: 46, name: "Uma", course: "Python", city: "Salem" },
    { id: 47, name: "Vignesh", course: "C", city: "Vellore" },
    { id: 48, name: "Wasan", course: "React", city: "Trichy" },
    { id: 49, name: "Yogesh", course: "Java", city: "Coimbatore" },
    { id: 50, name: "Zara", course: "Python", city: "Chennai" },
  
  ]
  const keys = Object.keys(Users[0])
  console.log(keys);
  const dropValues = [5,10,15,20,30,40,50]

  const filteruser = Users.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())).slice(0,limit)
  return (
    <div className='App'>
      <h2>Search User</h2>
      <input type='text' placeholder='Search Name' onChange={(e)=>setSearch(e.target.value)}></input>
      <select onChange={(e)=>setLimit(e.target.value)}>
        {dropValues.map((item)=>(
          <option>{item}</option>
        ))}
      </select>
        <table border={1}>
          <thead>
            {keys.map((item)=>(
              <th>{item}</th>
            ))}
          </thead>
          <tbody>
           {filteruser.map((item)=>(
             <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.course}</td>
              <td>{item.city}</td>
             </tr>
           ))}
          </tbody>
        </table>
    </div>
  )
}

export default App