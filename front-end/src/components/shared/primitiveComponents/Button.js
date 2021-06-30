import React, { useEffect, useState } from 'react'
import { GiNextButton } from 'react-icons/gi'
import '../../../styles/Button.css'

function Button(props) {
        
        const style= props.style
        const {name} = props
        const width = props.width
        const className = props.className
        const [coords, setCoords] = useState({x:-1,y:-1})
        const [isRippling, setIsRippling] = useState(false);

        useEffect(() => {
            if(coords.x !== -1 && coords.y !== -1){
                setIsRippling(true);
                setTimeout(()=> setIsRippling(false), 500)
            }
            else{
                setIsRippling(false)
            }
        }, [coords])

        useEffect(()=>{
            if(!isRippling){
                setCoords({x: -1, y:-1})
            }
        },[isRippling])
   
    return (
        <div 
        onClick= {(e)=>{
           
            const rect = e.target.getBoundingClientRect();
            setCoords({x:e.clientX - rect.left , y:e.clientY - rect.top})



            if(props.onClick) props.onClick() 
        
        }}
           
        style = {{width:width, backgroundColor:'#F25C05', ...style} }
    
        className={`uni-button ${className}`}>
            { isRippling ?
                (<span
                    className={`ripple`}
                    style={{
                        left:coords.x,
                        top:coords.y,
                        // width:style.width,
                        // height:style.height
                    }}></span>
                ):
                (
                    ''
                )
            }
                {props.icon? props.icon : null}
                    {name}
        </div>
    )
}

export default Button
