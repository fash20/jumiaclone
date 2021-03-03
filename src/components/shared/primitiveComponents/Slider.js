import React, { useState, useEffect } from 'react'
import '../../../styles/Slider.css'

function Slider() {
    const max= 180
    const [value, onChange] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('#F25C05')
    const divider = ()=>{
        return (max/100)
    }
    let num = Number (value/divider());
    useEffect(() => {
       const ele = document.querySelector('.buble')
       
       if(ele) {ele.style.left =  console.log(ele)}
    
    }, [value])
    return (
        <div className='slider-container'>
           <input 
           className='slider'  
           type='range'  min= '0' max={max} 
           value={value} 
           step="9"
           onChange={(e) => {console.log(e); onChange(e.target.value)}}
           onMouseOver ={()=>{backgroundColor === '#F25C05' ? setBackgroundColor('#f18546'): setBackgroundColor('#F25C05')}}
           />
        
               <div style ={{left:`calc(${num}% - ${num}*0.2px`, backgroundColor:backgroundColor }} className='buble'>
                    
               </div>
               <div style ={{left:`calc(${num}% - ${num}*0.2px`}} className='buble1 buble'>
                    {value}
               </div>
               
        </div>
    )
}

export default Slider
