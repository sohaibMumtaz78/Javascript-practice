import "./App.css";
import Product from "./product.jsx";
import ProductTab from "./productTab.jsx";
import MsgBox from "./msgBox.jsx"
function App() {
  return (
    <>
      <MsgBox userName="Sohaib Mumtaz" textColor="lightblue"/>
      <MsgBox userName="SMIT" textColor="gray"/>
      <ProductTab />
    </>
  );
  // <button>Hello World</button>
  // <p>Hello World</p>;
  // <h1>Hello Wolrd</h1>;
}

export default App
