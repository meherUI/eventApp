import React, { Component } from 'react';
const Location = () => {
    return ( 
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.829536005566!2d82.24093231390867!3d16.982933218815884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3828448b3a207b%3A0x1a4a415f0642e472!2sJNTU+Ground!5e0!3m2!1sen!2sin!4v1544270998267" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            
            allowFullS creen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
     );
}
 
export default Location;