import React, { useState } from 'react'
import './break.css'
const Break = () => {
  const [fixed, setfixed] = useState();
  const [selling, setselling] = useState();
  const [variable, setvariable] = useState();
  const [result, setresult] = useState();
  const [fixed1, setfixed1] = useState()
  const [selling1, setselling1] = useState()
  const [variable1, setvariable1] = useState()
  const [result1, setresult1] = useState()
  const calc_unit = (event) => {
    event.preventDefault();

    if (fixed < 0 || selling < 0 || variable < 0) {
      alert("Please enter valid values");
    } else {
      const result_value = (fixed) / (selling - variable);
      setresult(result_value);
    }

  }
  const calc_unit1 = (event) => {
    event.preventDefault();

    if (fixed1 < 0 || selling1 < 0 || variable1 < 0) {
      alert("Please enter valid values");
    } else {
      const value = (fixed1) / (selling1 - variable1);
      const val = value * selling1;
      setresult1(val);
    }
  }

  return (
    <div>
      <div className='Break-body'>
        <div className="heading">
          <h1>Break-Even Sales Calculator - Find Your Break-Even Point </h1>
          <p>Calculate break even sales, units needed to cover costs, and optimal<br />pricing. Free break even sales calculator for smart business planning.</p>
        </div>
        <div className="break-even">
          <div className="break-even1">
            <div className="Bleft-text1">
              <h1>Calculate Break-Even Point in Units:</h1>
              <div className="Bleft-buttons1">
              <form onSubmit={calc_unit}>
                <input type="text" placeholder='Enter total fixed cost' value={fixed} onChange={(e) => setfixed(e.target.value)} />
                <input type="text" placeholder='Enter Selling price per unit' value={selling} onChange={(e) => setselling(e.target.value)} />
                <input type="text" placeholder='Enter Variable cost per unit' value={variable} onChange={(e) => setvariable(e.target.value)} />
                <button type='submit'>Calculate</button>
              </form>
             </div>
            </div>
            <div className="Bright-text1" id="Bright-text1">
              <h1>Your break even point per unit is</h1>
              <h1>{result}</h1>
            </div>
          </div>
            

          
          <div className="break-even2">


            <div className="Bleft-text2">
              <h1>Calculate Break-Even Point in Price:</h1>
              <div className="Bleft-buttons2">
              <form onSubmit={calc_unit1}>
                <input type="text" placeholder='Enter total fixed cost' value={fixed1} onChange={(e) => setfixed1(e.target.value)} />
                <input type="text" placeholder='Enter Selling price per unit' value={selling1} onChange={(e) => setselling1(e.target.value)} />
                <input type="text" placeholder='Enter Variable cost per unit' value={variable1} onChange={(e) => setvariable1(e.target.value)} />
                <button type='submit'>Calculate</button>
              </form>
              </div>

            </div>
            <div className="Bright-text2" id="Bright-text2">
              <h1>Your break even point per price is</h1>
              <h1>{result1}</h1>
              
            </div>
            </div>

          </div>
      
        
    
        <div className="How-info">
          <h1>How to calculate Break-Even Point</h1>
          </div>
          <div className="how-info1">
          <p>Calculating the break-even point (BEP) is a straightforward mathematical process that</p>
          <p>identifies the exact volume of sales needed to cover all costs.</p>
        </div>
        <div className="brreak-body">
          <div className="Boxes">
            <h1>Calculate Break-Even Point in Units</h1>
            <div className="break-formula">
              <p><b>Break-Even Point(Units):-</b></p>
              <p>Total Fixed Cost</p>
              <p>Selling price per unit - Variable cost per unit</p>
            </div>
          </div>
          <div className="Boxes">
            <h1>Calculate Break-Even Point in Price</h1>
            <div className="break-formula">
              <p><b>Break-Even Point(Price):-</b></p>
              <p>BPE(Units) X Selling price per unit</p>

            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Break