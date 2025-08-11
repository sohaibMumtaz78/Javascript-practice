import Product from "./product.jsx";

function ProductTab() {
    let features = ["fast-Charging", "C-type", "5000mAh"]//example of array
    // let features2 = { a: "fast-Charging", b: "C-type", c: "5000mAh" } //example pf obj
    return (
        <div>
            <Product title="Ipone" price={55000} rating="⭐⭐⭐⭐⭐" options={features} />
            <Product title="Samsung" price={46000} rating="⭐⭐⭐⭐" options={features} />
            <Product title="Vivo" price={30000} rating="⭐⭐⭐" options={features} />
        </div>
    )
}

export default ProductTab;