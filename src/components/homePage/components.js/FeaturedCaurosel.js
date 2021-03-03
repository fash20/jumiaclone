import React, { useEffect, useState } from 'react'
import image0 from '../../../assets/logo.png'
import image1 from '../../../assets/logo2.png'
import image2 from '../../../assets/logo3.png'
import image7 from '../../../assets/logo4.png'
import image3 from '../../../assets/PS-4.jpg'
import image4 from '../../../assets/logo-e-commerce.png'
import image5 from '../../../assets/e-shop.png'
import image6 from '../../../assets/home-theatre.jpg'
import image8 from '../../../assets/Smartwatches_.jpg'
import '../styles/HomePageComponents.css'
import { GoPrimitiveDot } from 'react-icons/go';

function FeaturedCaurosel() {
    const [image, setImage] = useState()
    // let [i, setI] = useState(0)
    const [showingImage, setShowingImage] = useState({ name: '' })
    const [active, setIsActive] = useState({name:'', style: '' })
    const [images, setImages] = useState([image3, image6, image8])
    useEffect(() => {
        setImage(image3)
        // setI(0)
        setImages([image3, image6, image8])

        //   autoChangeImage();

        return () => {
            setImage()
            // setI()
            setImages()
        }
    }, [])
    let i = 1;
    const changeImage = () => {

        if (i < images.length - 1) {
            setImage(images[i])
            i = i + 1;
            console.log(i)
        }
        else {
            setImage(images[images.length - 1])
            i = 0
            console.log(i)

        }
    }
    const autoChangeImage = () => {

        setInterval(() => {

            changeImage();

        }, 3000)

    }

    return (
        <div className='featured-product-caurosel'>
            <img style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '3px' }} src={showingImage.name !== '' ? showingImage.name : image} />
            {/* <h1>{image}</h1> */}
            <div className='carousel-image' >
                {
                    images.map((item) => (
                        < GoPrimitiveDot
                            key={item}
                            onClick={() => { setShowingImage({ name: item, style: '#fff' }); }}
                            style={{ fontSize: '17px', color: showingImage.name == item ? '#fff' : 'black' }} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedCaurosel
