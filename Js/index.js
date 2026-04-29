// let form = document.getElementById("userForm")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let name = document.getElementById("username").value
//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value
//     let userInfo = {
//         name: name,
//         email: email,
//         password: password
//     }
//     let jsonData = JSON.stringify(userInfo)
//     localStorage.setItem("userInfo",jsonData)
//     console.log(jsonData);
    
//     alert("User Info saved to localStorage");
// }
    
// )

let button = document.createElement("button")
//innerText
// innerHtml
// textContent
button.innerText = "Click Me"
button.style.backgroundColor = "blue"
button.setAttribute("id","myButton")
document.body.append(button)