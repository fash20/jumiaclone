import React from 'react'
import image from '../../../assets/home-theatre.jpg';
import image1 from '../../../assets/PS-4.jpg';
import Image from '../../shared/primitiveComponents/Image';
import '../styles/HomePageComponents.css'
import FeaturedProductImage from './FeaturedProductImage';


function ImageProductSugg(props) {
    const images = [image,image1]
    return (
        
        <div  className='image-Product-Sugg' >
            {
                images.map((item)=>(
                    <div key={item} className='image-product-sugg-wrapper' style={{borderRadius:'3px'}}>
                    <FeaturedProductImage image={item} />
                    </div>
                ))
            }
        </div>
    )
}

export default ImageProductSugg
