import Product from "./product.jsx";
// import price from "./Price.jsx";x

function ProductTab() {
    // let features = ["fast-Charging", "C-type", "5000mAh"]//example of array
    // let features2 = { a: "fast-Charging", b: "C-type", c: "5000mAh" } //example pf obj
    let styles = {
        display: "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems :  "center",
        gap: "20px"
    }
    return (
        <div style={styles}>
            <Product title="React" desc="A JavaScript library for building fast, component-based user interfaces." idx={0}/>
            <Product title="Node.js" desc="A JavaScript runtime that runs outside the browser, used for server-side development." idx={1}/>
            <Product title="mangoDB" desc="A NoSQL database that stores data in flexible, JSON-like documents." idx={2}/>
            <Product title="Express.js" desc="A minimal Node.js framework for building web applications and APIs." idx={3}/>
        </div>
    )
}

export default ProductTab;