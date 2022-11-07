import React from 'react'
import ImageSlider from '../Images/imageSlider';
import images from "../Images/images"


function Header(){
        return(
            <div>
                <div>Test 2</div>
                <ImageSlider images={images}/>
            </div>
        );
}

export default Header