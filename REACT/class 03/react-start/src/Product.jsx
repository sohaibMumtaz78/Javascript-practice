import "./product.css"
import Price from "./Price";

function Product({ title,desc ,idx}) {
    // const list = options.map((option)=> <li>{option}</li>)
    // let isDiscount = price > 30000 ? "Discount of 5%" : ""  //ternirary operator
    // let styles = {backgroundColor : price > 30000 ? "lightblue" : ""}4
    let oldPrices = ["12000" , "16000","20000" ,"22000" ]
    let newPrices = ["8000" , "12000","16000" ,"20000" ]

    return (
        // <div className="product" style={styles}>
        //     <h1>{title}</h1>
        //     <h3>Price : {price}</h3>
        //     {/* <h3>{isDiscount}</h3> */}
        //     <h3>{price > 30000 ? <p style={styles}>Discount of 5%</p> : null }</h3>
        //     <h6>Rating : {rating}</h6>
        //     {/* <p>{list}</p> */}
        // </div >


        <div className="product" >
             <h4>{title}</h4>
            {/* <p>Title</p> */}
            {/* <p>Desc</p> */}
            <p>{desc}</p>
            {/* <Price oldPrice="123" newPrice="120"/> */}
            <Price oldPrice={oldPrices[idx]}  newPrice={newPrices[idx]}/>

        </div >
    );
}

export default Product;