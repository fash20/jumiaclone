import React from 'react'
import imageDefault from '../../../assets/logo3.png'
import '../styles/HomePageComponents.css'
function FeaturedProductImage({image}) {
   
    return (
        <div style={{borderRadius:'3px'}} className='featured-product-image'>
          
                   <img style={{maxHeight:'100%', maxWidth:'100%', borderRadius:'3px'}} src={(image) ? image : imageDefault } />
           
        </div>
    )
}

export default FeaturedProductImage



