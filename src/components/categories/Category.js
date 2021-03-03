import React from 'react'
import FrontPageProductContainer from '../homePage/components.js/FrontPageProductContainer'
import Products from '../product/Products'
import CategoryContainer from './CategoryContainer'
import './styles.css/Category.css'

function Category() {
    return (
        <div className='category-container'>
            {
                //  'Full width image container'
            }
            <FrontPageProductContainer titleAlign='center' categoryContainer={<CategoryContainer />} title={'Section One'} />
            <FrontPageProductContainer link='SEE MORE' title={'Product Under Some Criteria'} />
            <FrontPageProductContainer titleAlign='center' categoryContainer={<CategoryContainer />} title={'Section Two'} />
            <div>
                <Products />
            </div>


        </div>
    )
}

export default Category
