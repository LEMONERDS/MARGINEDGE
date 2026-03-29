import React from 'react'
import './home.css';

const Home = () => {
    return (
        <div className="Bac_color">
            <div className="hero">
                <div className="hero-left">
                    <h1>Margin Edge</h1>
                    <h2>Free financial tools for small business</h2>
                    <p>Calculate profit margins, break even point and discount.</p>
                </div>

                <div className="Economics">
                    <h2>Welcome to Your Smart Economics Hub</h2>
                    <p>
                        Make smarter financial decisions with ease. This platform is designed to simplify complex economic calculations and help you understand your profits, costs, and pricing strategies in a clear and practical way.
                        Whether you're calculating profit margins, finding your break-even point, or analyzing discounts, everything here is built to give you quick and accurate results without any confusion.
                        Our goal is to make economics simple, useful, and accessible for everyone — from students learning the basics to entrepreneurs managing real-world finances. With easy-to-use tools and clear explanations, you can not only calculate faster but also understand the logic behind every result.
                        Start exploring and take control of your numbers with confidence.
                    </p>
                    
                </div>
            </div>
            <div className="Tool">
            <div className="tool">
            <div className="tools">
                <h2>Our Tools</h2>
                <i>Explore a range of powerful and easy-to-use financial tools designed to simplify your calculations:</i>
                </div>
                <div className='tocnt'>
                <div className="tocnt1">
                <h1>Profit Margin Calculator </h1>
                <img src='./src/assets/images/profit-margin.png' alt='Profit margin'></img>
                </div>
                <div className="tocnt2">
                <h1>Break-even Calculator  </h1>
                <img src='./src/assets/images/break-even.png' alt='Break even'></img>
                </div>
                <div className="tocnt3">
                <h1>Discount Calculator  </h1>
                <img src='./src/assets/images/discount.png' alt='Discount'></img>
            </div>
        </div>
    </div>
</div>        
</div>

    )
}

export default Home