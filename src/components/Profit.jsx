import React, { useState } from 'react'
import './profit.css'
const Profit = () => {
  const [revenue1, setrevenue1] = useState();
  const [cogs, setcogs] = useState();
  const [result1, setresult1] = useState();
  const [operation, setoperation] = useState();
  const [revenue2, setrevenue2] = useState();
  const [restlt2, setrestlt2] = useState();
  const [net, setnet] = useState();
  const [revenue3, setrevenue3] = useState();
  const [result3, setresult3] = useState();
  const gpmValue = (ev) => {
    ev.preventDefault();
    if(revenue1<0||cogs<0){
      alert("Please enter valid values");
    }else{
      const res1 = ((revenue1-cogs)*100)/(revenue1);
      setresult1(res1);
    }
  }
  const opm = (ev) => {
    ev.preventDefault();
    if(revenue1<0||cogs<0){
      alert("Please enter valid values");
    }else{
      const res2 = (operation*100)/(revenue2);
      setrestlt2(res2);
    }
  }
  const npm = (ev) => {
    ev.preventDefault();
    if(revenue1<0||cogs<0){
      alert("Please enter valid values");
    }else{
      const res3 = (net*100)/(revenue3);
      setresult3(res3);
    }
  }
  return (
    <div>
      <div className='profit-body'>
        <div className="Heading">
          <h1>Profit Margin Calculator </h1>
          <p>Calculate profit margins, gross margins, and net margins from cost and
          selling price. Get instant, accurate results to make smarter pricing decisions
          for your business.</p>
        </div>
          <div className="profit-even">
          <div className="profit-even1">
            <div className="left-text1">
            <h1>Calculate Gross Profit Margin:</h1>
            <div className="left-buttons1">
            <form onSubmit={gpmValue}>
              <input type="text" placeholder='Enter Revenue' value={revenue1} onChange={(e) => setrevenue1(e.target.value)} />
              <input type="text" placeholder='Enter COGS' value={cogs} onChange={(e) => setcogs(e.target.value)} />
              <button type='submit'>Calculate</button>
            </form>
            </div>
            </div>
            <div className="right-text1" id="right-text1">
              <h1>Your Gross Profit Margin is</h1>
              <h2>{result1}</h2>
              </div>
          </div>
          <div className="profit-even2">
            <div className="left-text2">
              <h1>Calculate Operating Profit Margin:</h1>
              <div className="left-buttons2">
              <form onSubmit={opm}>
                <input type="text" placeholder='Enter Operation Income' value={operation} onChange={(e) => setoperation(e.target.value)} />
                <input type="text" placeholder='Enter Revenue' value={revenue2} onChange={(e) => setrevenue2(e.target.value)} />
                <button type='submit'>Calculate</button>
              </form>
            </div>
          </div>
            <div className="right-text2" id="right-text2">
              <h1>Your Operating Profit Margin is</h1>
              <h2>{restlt2}</h2>
            </div>
          </div>
          <div className="profit-even3">
            <div className="left-text3">
              <h1>Calculate Net Profit Margin:</h1>
              <div className="left-buttons3">
              <form onSubmit={npm}>
                <input type="text" placeholder='Enter Net Income' value={net} onChange={(e) => setnet(e.target.value)} />
                <input type="text" placeholder='Enter Revenue' value={revenue3} onChange={(e) => setrevenue3(e.target.value)} />
                <button type='submit'>Calculate</button>
              </form>
              </div>
            </div>
            <div className="right-text3" id="right-text3">
              <h1>Your Net Profit Margin is</h1>
              <h2>{result3}</h2>
            </div>
          </div>
        </div>
      
      <div className="Profit-info">
        <div className="info">
          <h1>How to Calculate Profit Margin - Complete Guide for Business Owners</h1>
          </div>
          <div className="info1">
          <p>Calculating profit margin is essential for understanding how much money your business</p>
          <p>actually keeps from its sales. It is expressed as a percentage, representing how many cents of</p>
          <p>profit the business has generated for each dollar of sale.</p>
        </div>
        <div className="holder">
          <div className="guide">
            <h1>Gross Profit Margin</h1>
            <div className="formula">
              <p><b>Gross Profit Margin:-</b></p>
              <p>(Revenue-COGS)X100</p>
              <p>Revenue</p>
            </div>
          </div>
          <div className="guide">
            <h1>Operating Profit Margin</h1>
            <div className="formula">
              <p><b>Operating Profit Margin:-</b></p>
              <p>(Operation Income)X100</p>
              <p>Revenue</p>
            </div>
          </div>
          <div className="guide">
            <h1>Net Profit Margin</h1>
            <div className="formula">
              <p><b>Net Profit Margin:-</b></p>
              <p>(Net Income)X100</p>
              <p>Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profit