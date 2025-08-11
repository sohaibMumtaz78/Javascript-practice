import "./product.css"

function Product({ title, price, rating ,options, options2 }) {
    // const list = options.map((option)=> <li>{option}</li>)
    // let isDiscount = price > 30000 ? "Discount of 5%" : ""  //ternirary operator
    let styles = {backgroundColor : price > 30000 ? "lightblue" : ""}
    return (
        <div className="product" style={styles}>
            <h1>{title}</h1>
            <h3>Price : {price}</h3>
            {/* <h3>{isDiscount}</h3> */}
            <h3>{price > 30000 ? <p style={styles}>Discount of 5%</p> : null }</h3>
            <h6>Rating : {rating}</h6>
            {/* <p>{list}</p> */}
        </div >
    );
}

export default Product;