const Card = (props)=>{
    return(
        <div className="Cards">
            <div className="topBox">
                <h1 style={{backgroundColor:props.color}}></h1>
                <h3></h3>
            </div>
            <div className="price">
                <p>Monthly Price</p>
                <h4></h4>
            </div>
            <div className="quality">
                <h2>Video</h2>
                <h4></h4>
            </div>
        </div>
    )
}
export default Card