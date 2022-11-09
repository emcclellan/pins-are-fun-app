import React from 'react'
import ImageSlider from '../Images/imageSlider';
import images from "../Images/images"

function Body(){
        return(
            <div id="header" className="centerContent">
                <ImageSlider images={images}/>
            </div>
        );
}

export default Body