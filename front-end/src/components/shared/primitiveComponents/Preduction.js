import React from 'react'
import reduction from '../PercentageReduction'

function Preduction(props) {
    const {style, price, oldPrice} = props
    return (
        <div
            className='cart-cent1 fs12'
            style={{ padding: '4px',width:'35px'  ,borderRadius: '2px', color: '#F25C05', backgroundColor: '#ffece2', ...style }}>
            -{
                reduction(price,oldPrice)
            }%
        </div>
    )
}

export default Preduction
