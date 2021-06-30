import React, { useState, useEffect } from 'react'
import image from '../../../assets/logo.png'
import image2 from '../../../assets/logo2.png'
import image3 from '../../../assets/logo3.png'
import image4 from '../../../assets/1 (1).jpg'
import image5 from '../../../assets/e-shop.png'
import image6 from '../../../assets/necklace.jpg'
import image7 from '../../../assets/j.gif'
import image8 from '../../../assets/Slider-(2).jpg'

import '../../../styles/Carousel.css'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GiConsoleController } from 'react-icons/gi'

function Carousel() {
    const items = [

        image,

        image2,

        image3,

        image4,

        image5,

        image6,

        image7,

        image8,

    ]
    const [images, setImages] = useState(items);
    const [showing, setShowing] = useState(images[0]);
    const [dirIcon, setDirIcon] = useState(false);
    const changeShowingLeft = () => {
        let index = images.indexOf(showing);

        if (index === -1 || index === 0) {
            index = images.length;
            setShowing(images[index - 1]);
        }
        else {
            index = index - 1;
            setShowing(images[index]);
        }

    }
    const changeShowingRight = () => {
        let index = images.indexOf(showing);
        if (index === -1 || index === images.length - 1) {
            index = 0;
            setShowing(images[index]);
        }
        else {
            index = index + 1;
            setShowing(images[index]);
        }
    }
    
    useEffect(() => {
       
         const interval =  setInterval(()=>{
                let index = images.indexOf(showing)
                if (index === -1 || index === images.length - 1) {
                    index = 0;
                    setShowing(images[index]);
                }
                else {
                    index = index + 1;
                    setShowing(images[index]);
                }
            }, 5000)

        return () => {
           clearInterval(interval);
        }
    }, [showing])
    return (
        <div onMouseOver={()=> setDirIcon(true)} onMouseLeave ={()=>{setDirIcon(false)}} className='carousel-contt'>
            <div style={{ width: '712px', height: '384px', position: "relative", boxSizing:'border-box', backgroundColor:'InactiveBorder' }} className='centcent'>
                <div style ={{visibility: dirIcon ? 'visible':'hidden'}} className='carousel-arrow centspa'>
                    <FaChevronLeft
                        className='c-arrow'
                        fontSize={20}
                        onClick={() => changeShowingLeft()}
                    />
                    <FaChevronRight
                        className='c-arrow'
                        fontSize={20}
                        onClick={() => changeShowingRight()}
                    />
                </div>
                <div  className='carousel-dot centcent'>
                    {
                        images.map((item, index) => < GoPrimitiveDot key={index} onClick={() => {
                            setShowing(item)
                            setImages([...items])
                        }}
                            style={{ margin: ' 2px ', transition: '.5s' }}
                            fontSize={17}
                            color={showing === item ? '#F25C05' : '#e8e8e8'}
                        />)
                    }
                </div>
                <div style={{ width: '100%', height: '100%', transition:"opacity 2s ease" }} className='centcent'>
                    <img className='carousel-imagee' src={showing} />
                </div>
                {
                /* <div className='corouse-link'>
                        <a href='/product'><span className='corouse-link-span'> Discover </span></a>
                </div> */
                }
            </div>
        </div>
    )
}
export default Carousel