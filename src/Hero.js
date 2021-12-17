import React from 'react'
import Navigation from "./components/Navigation"
const Hero = ({handleLogout}) => {
    return (
        <div className="hero">    
            <nav>
                <h2>Welcome</h2>
                <Navigation />
                <button className="btn" onClick={handleLogout}>Logout</button>                
            </nav>                
        </div>
    )
}
export default Hero;