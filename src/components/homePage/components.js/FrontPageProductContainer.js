import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import ProductContainer from '../../product/ProductContainer';
import Image from '../../shared/primitiveComponents/Image';
import '../styles/HomePageComponents.css'

function FrontPageProductContainer(props) {
    const { title } = props
    const { titleAlign } = props
    const { categoryContainer } = props
    return (
        <div className='fo-pa-pro-cont' style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: '#fff' }}>
            {
                title !== undefined || title === null ?
                    <div className='fo-pa-pro-wrap' style={{ backgroundColor: props.backgroundColor }}>
                        <span style={{ padding: '0 20px', letterSpacing: '1px', width:titleAlign !== undefined ? '100%': '', textAlign: titleAlign }}> {
                            title
                        }
                        </span>
                        {props.link !== undefined ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '3px', fontSize: '13px', padding: '10px' }} >{props.link} <AiOutlineRight /> </div> : null}
                    </div>
                    : null
            }
            <div className='prodt-container' >
                {
                    !categoryContainer ? <ProductContainer /> : categoryContainer
                }
            </div>
        </div>
    )
}

export default FrontPageProductContainer
