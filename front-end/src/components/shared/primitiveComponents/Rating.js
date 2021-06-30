import React, { useState } from 'react'
import { ImStarEmpty, ImStarFull } from 'react-icons/im';
import '../../../styles/Star.css'
import StarRatings from 'react-star-ratings';


function Ratinng(props) {
    const stars = Array(5).fill().map((_, i) => i + 1)
    const [clicked, setClicked] = useState(true)
    const [starRating, setStarRating] = useState(
        stars.map(item => {
            return {
                color: '#e8e8e8'
            }
        })
    )
    const rating = 4.89;
    const updateState = (index, color) => {
        let arr, mgarr, retArr = []


        if (index >= 0) {
            arr = Array(index + 1).fill().map((_, i) => i + 1)
            arr = arr.map((item, i) => {

                return {
                    color: color
                }
            });
            mgarr = Array(5 - (index + 1)).fill().map((_, i) => i + 1)
            mgarr = mgarr.map(item => {
                return {
                    color: '#e8e8e8'
                }
            })
            retArr = [...arr, ...mgarr]
        }
        else {
            mgarr = Array(5).fill().map((_, i) => i + 1)
            mgarr = mgarr.map(item => {
                return {
                    color: '#fff'
                }
            })
            retArr = [...mgarr]
        }
        return retArr

    }
    const reset = () => {
        return stars.map(item => {
            return {
                color: '#e8e8e8'
            }
        })
    }

    return (
        <div style={{}} className='cart-cent'>
            {/* <div > */}
            {
                starRating.map((item, index) => <div   key={index}> <ImStarFull fontSize={props.size} style={{ padding: '0 2px',}} color={item.color}
                    onMouseEnter={() => {

                        setStarRating(
                            [...updateState(index, 'gold')]
                        )
                    }
                    }
                    onClick={() => {

                        // setClicked(true)
                        if(index-1 !== -1){
                            setStarRating(
                            [...updateState(index-1, 'gold')]
                        )
                        }
                        else
                        setStarRating(
                            [...reset()]
                        )
                        // reset()
                       
                    }}
                    onMouseOut={() => {
                        // clicked && setStarRating(
                        //     [...reset()]
                        // )
                    }
                    }
                  
                    size={20}

                />
                {/* <div style={{ width: `${rating > 0 && rating <= 5 ? rating * 20 : 0}%`, height:'20px', backgroundColor: 'gold' , zIndex:300}} className='rating-div2'> </div> */}
                </div>
                )
            }
            {/* </div> */}
            {/* <div className='rating-div'>
                <div style={{ width: `${rating > 0 && rating <= 5 ? rating * 20 : 0}%`, height:'20px', backgroundColor: 'pink' }} className='rating-div2'>
                    {
                        
                    }
                </div>
            </div> */}
        </div>
    )
}

export default Ratinng
