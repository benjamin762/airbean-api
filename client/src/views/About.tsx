import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <h1>About Us</h1>
        <div>Welcome to AirBean, your daily destination for exceptional coffee made with care and passion. We believe every cup tells a story — from the farm where the beans are grown to the moment it warms your hands.

        At AirBean, we proudly serve a curated selection of coffee crafted from locally roasted beans, ensuring freshness and quality in every sip. Whether you’re after a robust Black Coffee of the Day, a smooth Double Espresso, or a comforting Mocha, we’ve got your cravings covered.
        
        Our menu celebrates the unique flavors of coffee from around the world:
        
        <ul className='list'>
        <li><Link to="/menu"><strong>Black Coffee of the Day</strong></Link> — Experience the distinct taste of our locally roasted beans, freshly selected for you.</li>
        <li><Link to="/menu"><strong>Double Espresso</strong></Link> — A bold shot of energy to kickstart your day.</li>
        <li><Link to="/menu"><strong>Light Roast</strong></Link> — Sourced from Morocco, these lightly roasted beans offer delicate and vibrant notes.</li>
        <li><Link to="/menu"><strong>Lungo</strong></Link> — A medium roast that’s perfectly balanced and smooth.</li>
        <li><Link to="/menu"><strong>Mocha & Oat Latte</strong></Link> — Creamy, indulgent options made with our signature beans and oat milk for a delicious twist.</li>
        </ul>
        
        At AirBean, we’re more than just coffee — we’re a community of coffee lovers who appreciate the art of a great brew. Join us on a journey of flavor, warmth, and connection.</div>
    </>
  )
}

export default About