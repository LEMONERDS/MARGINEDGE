import React, { useState } from "react";
import "./discountCalculator.css";

const Discount = () => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    if (price === "" || discount === "") {
      alert("Please enter all values");
      return;
    }

    const result = price - (price * discount) / 100;
    setFinalPrice(result.toFixed(2));
  };

  return (
    <div>
      <div className='discount-body'>
        <div className="heeading">
          <h1>Discount Calculator - Find the discount</h1>
          <p>Calculate discount on your products</p>
          </div>
          <div className="disc-calc">
            <div className="Discount-calc">
              <div className="Dleft-text">
                <h1>Calculate Discount:</h1>
                <div className="dleft-buttons">
                  <form onSubmit={(e) => {e.preventDefault();calculateDiscount();}}>
                        <input type="text" placeholder="Original Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        <input type="number" placeholder="Discount %" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
                        <button onClick={calculateDiscount}>Calculate</button>
                </form>
                </div>
              </div>
              <div className="Dright-text" id="Dright-text">
                <h1>Discount:</h1>
                  {finalPrice !== null && (<h3>Final Price: ₹{finalPrice}</h3>)}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Discount