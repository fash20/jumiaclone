import React from 'react'
import image from '../../assets/01_cat.png'
import image1 from '../../assets/4_cat-(2).png'
import image2 from '../../assets/ios-phones-hp.png'
import image3 from '../../assets/9.jpg'
import image4 from '../../assets/Pics.jpg'
import CategoryCard from './CategoryCard'

function CategoryContainer() {
    const product = [
        {
            imageSource: image2,
            name: 'Apple MacBooks',
            id:'efgeg'
        },
        {
            imageSource: image2,
            name: 'Gionee',
            id:'efglpijddeg'
        },
        {
            imageSource: image3,
            name: 'Fashion',
            id:'efg1ljl2eg'
        },
        {
            imageSource: '',
            name: 'Refigerators',
            id:'efgdwelopiuiyg'
        },
        
        {
            imageSource: '',
            name: 'Kitchen',
            id:'efgsdspp[leg'
        },
        {
            imageSource: '',
            name: 'Baby Care',
            id:'efgegeljeqe'
        },
        {
            imageSource: '',
            name: 'Fashion',
            id:'efgh12eg'
        },
        {
            imageSource: image3,
            name: 'Refigerators',
            id:'efgdwe-0g'
        },
        
        {
            imageSource: image4,
            name: 'Kitchen',
            id:'efgsdsk;][eg'
        },
        {
            imageSource: '',
            name: 'Baby Care',
            id:'efgege9876eqkke'
        },
        
        {
            imageSource: image4,
            name: 'Kitchen',
            id:'efgsdffsefsg'
        },
        {
            imageSource: '',
            name: 'Baby Care',
            id:'efgegssfse9876eqe'
        },
        
    ]
    return (
        // <div className='product-card-wrapper'>
              < >
            {
                product.map(item => (
                    <CategoryCard key={item.id} item = {item} />
                ))
            }
            </>
    )
        // </div>
}

export default CategoryContainer
