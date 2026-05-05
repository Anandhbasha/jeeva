import Button from "./Button"
import Card from "./Card"

const App = ()=>{
  return(
    <div className="Apps">
      <Button x="click"/>
      <Button x="save"/>
      <Button x="login"/>
      <Button x="edit"/>
      <Button x="delete"/>
      <div className="cardsNew" style={{display:"flex"}}>
        <Card  device ="mobile" pixesls="480px" />
      <Card device ="mobile" pixesls="720px" color="red"/>
      <Card />
      <Card />
      </div>
    </div>
  )
}
export default App