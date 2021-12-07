import React from 'react'

import Inside from "./Inside"
const Hero = ({handleLogout}) => {
    return (
        <div className="hero">    
            <nav>
                <h2>Welcome</h2>
                <button className="btn" onClick={handleLogout}>Logout</button>                
            </nav>           
            
            <Inside/>
        </div>
    )
}

export default Hero;