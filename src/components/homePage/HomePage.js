import React from 'react'
import CategoriesDropdown from '../categories/CategoriesDropdown'
import CategoryCard from '../categories/CategoryCard'
import AffiliatedProducts from './components.js/AffiliatedProducts'
import FeaturedCaurosel from './components.js/FeaturedCaurosel'
import FrontPageProductContainer from './components.js/FrontPageProductContainer'
import ImageProductSugg from './components.js/ImageProductSugg'
import CategoryContainer from '../categories/CategoryContainer'

function HomePage() {
    return (
        <div className='HomepageContainer'>
            <CategoriesDropdown />

            <AffiliatedProducts />
            <FrontPageProductContainer title={'Top selling items'} />
            <FrontPageProductContainer title={'Deals of the Day | From ₦1,000'} backgroundColor='red' link='See More' />
            <FrontPageProductContainer title={'Shop Our Collections!'} />
            <ImageProductSugg/>
            <FrontPageProductContainer categoryContainer = {<CategoryContainer />} title={'Featured Categories'} />
            <FrontPageProductContainer title={'Women Sneakers | up to 60% Off'}  />
            <FrontPageProductContainer categoryContainer = {<CategoryContainer />} title={'Featured Categories'} />

            <ImageProductSugg/>
            <FrontPageProductContainer backgroundColor='pink' title={'Women Sneakers | up to 60% Off'} />
            <FrontPageProductContainer title={'Women Sneakers | up to 60% Off'} />
            <FrontPageProductContainer backgroundColor='#f18546' title={'Women Sneakers | up to 60% Off'} />
        </div>
    )
}

export default HomePage
