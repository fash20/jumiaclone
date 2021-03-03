import React from 'react'
import image from '../../assets/4_cat-(2).png';
import Image from '../shared/primitiveComponents/Image';
import './styles.css/CategoryStyles.css'

function CategoryCard(props) {
    return (
        <div className='category-card'>
            <img style={{maxHeight:'100%',maxWidth:'100%'}} src ={props.item.imageSource ? props.item.imageSource : image} />

                <span style={{ fontSize: '15px', margin: '3px' }} className="category-name">
                    {
                        props.item.name.length <= 25 ? props.item.name : props.item.name.substring(0, 22,) + '...'
                    }
                </span>
          
        </div>
    )
}

export default CategoryCard
{/* <Image imageSize='small' source={props.item.imageSource ? props.item.imageSource : image} />
            <span style={{ fontSize: '15px', margin: '3px' }}>{props.item.name}</span> */}