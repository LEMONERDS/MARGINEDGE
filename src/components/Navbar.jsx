import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="logo font">
                <img src="https://mma.prnewswire.com/media/1879087/MarginEdge_Logo.jpg?p=facebook" alt="img" />
                <Link to="/"><h3>Margin Edge</h3></Link>
            </div>
            <div className="features font">
                <li><Link to="/Profit">Margin Calculator</Link></li>
                <li><Link to="/Break">Break-even Point</Link></li>
                <li><Link to="/DiscountCalculator">Discount Calculator</Link></li>
            </div>
        </nav>
    </div>
  )
}

export default Navbar