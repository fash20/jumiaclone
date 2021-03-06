import React, { useContext, useEffect, useState } from 'react'
import image1 from '../../../assets/necklace.jpg'
import image2 from '../../../assets/logo4.png'
import image3 from '../../../assets/1 (1).jpg'
import image4 from '../../../assets/logo.png'
import ProductImage from './ProductImage'
import './Product.css'
import LinkBotton from '../../shared/primitiveComponents/LinkBotton'
import { BiHeart } from 'react-icons/bi'
import { MdAddShoppingCart } from 'react-icons/md'
import Rating from '../Rating'
import Button from '../../shared/primitiveComponents/Button'
import { RiFacebookCircleLine, RiShieldStarFill, RiTruckLine, RiTwitterLine } from 'react-icons/ri'
import { GiReturnArrow } from 'react-icons/gi'
import { AiOutlineRight } from 'react-icons/ai'
import { BsExclamationCircle } from 'react-icons/bs'
import { CgDetailsMore } from 'react-icons/cg'
import { IoIosOptions } from 'react-icons/io'
import { VscFeedback } from 'react-icons/vsc'
import Preduction from '../../shared/primitiveComponents/Preduction'
import comma from '../../shared/Comma'
import Naira from '../../shared/primitiveComponents/Naira'
import { useLocation } from 'react-router'
import ProductLists from '../ProductLists'
import Review from '../../review/Review'
import { ActionContext, AddContext, cartContext } from '../../../App'


function ProductBody() {
    const location = useLocation();
    const product = ProductLists[location.pathname.substring(9) - 1]
    const [image, setImage] = useState(product.image);
    const images = [product.image, image2, image3, image4];
    const cart = useContext(cartContext)
    const action = useContext(ActionContext)
    const [hide, setHide] = useState(false)
    let count = action('PROCOUNTER', product.name)

    const isItemInCart = () => {
        cart.map(item => {
            if (product.name === item.name) {
                setHide(true)
            }
        })
    }
    const promoLinks = [
        {

            name: 'Purchase with Coupon Code',
            href: '/purchase-with-coupon'
        },
        {
            name: 'Enjoy free delivery',
            href: '/free-delivery'
        },
        {
            name: 'By airtime and data',
            href: '/purchase-airtime-data'
        },
    ]
    useEffect(() => {
        isItemInCart()
    })
    return (
        <div>
            <div className='product-body-container-1 mrbtm10' >
                <div className='product-body-container-2'>
                    <div className='flex-just-left width100'>
                        <div className='img-big-sm-shr '>
                            <div className='bbtm'>
                                <div className='product-image-big'>
                                    <ProductImage style='product-big-image-style' source={image} />
                                </div>
                                <div className='product-image-small-container mrbtm10 '>

                                    {
                                        images.map(item => <div key={item} className='product-image-small  '> <ProductImage style={`image-item ${item === image ? 'item-isactive' : null}`} onClick={() => { setImage(item) }} source={item} />  </div>)
                                    }

                                </div>
                            </div>
                            <div className='promotion'>
                                <span className='promo'>SHARE THIS PRODUCT</span>
                                <div className='share-product'>
                                    <RiFacebookCircleLine fontSize={26} />
                                    <RiTwitterLine fontSize={26} />
                                </div>
                            </div>
                        </div>
                        <div className='width100' >
                            <div className='mrbtm10 bbtm'>
                                <div className='display-flex width100'>
                                    <span className='product-title '>{product.name}</span>
                                    <LinkBotton style={{ height: '40px', width: '40px', borderRadius: '50%' }} icon={<BiHeart fontSize={24} />} /></div>
                                <Rating rating={product.ratng} />
                            </div>
                            <div className='product-body-pricing  bbtm'>
                                <span className='product-princing'><Naira /> {comma(product.price)}</span>
                                <div style={{ position: 'relative' }} className='pricing-reduction'><span className='reduct'> N {comma(product.oldprice)}</span> <Preduction price={product.price} oldPrice={product.oldprice} /></div>
                                <Button
                                    style={{ display: hide ? 'none' : '', margin: "10px 0" }}
                                    onClick={() => {
                                        action('ADDONE', product)
                                    }}
                                    icon={<MdAddShoppingCart
                                        style={{ position: 'absolute', left: '0%', marginLeft: '10px', }} fontSize='24' />}
                                    name='ADD TO CART'
                                />
                                <div style={{ display: !hide ? 'none' : 'flex', width: "100%" }} className ='cart-cent cart-ali-cent'>
                                    <Button className='br7' onClick={() => {
                                        if (action('PROCOUNTER', product.name) > 1) {
                                            action('REMOVEONE', product.name)
                                        }
                                        else{
                                        action('REMOVEITEM', product.name)
                                        setHide(!hide)
                                        }
                                    }}
                                        className='count-button'
                                        name={'-'} />
                                    <span className="cart-cent1 product-count fs13">{ count}</span>
                                    <Button className='br7' onClick={() => {
                                        action('ADDONE', product)

                                    }}
                                        className='count-button'
                                        name={'+'} />
                                    <div  style={{height: '40px', margn:'100px',width:'fit-content'}} className= " cart-cent1 fs13">{ '( ' +count + ' item(s) added )' }</div>
                                </div>
                            </div>
                            <div className='promotion'>
                                <span className='promo'>PROMOTIONS</span>
                                <div className='promo-links'>
                                    {
                                        promoLinks.map(item => <a className='promo-link' key={item.href} href={item.href}>{item.name}</a>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pddtb10'>
                        <span><a style={{ fontSize: '14px' }} href='/report-incorrect-info'>Report incorrect product information</a></span>
                    </div>
                </div>
                <div className='product-body-side'>
                    <div className='delivery-options br7'>
                        <span className='pddall8 promo brbtm'>DELIVERY & RETURNS</span>
                        <div className='pddall8 brbtm'>
                            <span className=' fs12'> Free shipping Free shipping Free shipping Free shipping Free shipping </span>
                        </div>
                        <div>
                            <span className='pddall8 promo ' style={{ fontSize: '16px' }}>Choose your location </span>
                            <div className='pddall8'>
                                <select className=' promo-link select-custom' style={{ width: '100%', margin: '4px 0' }}>
                                    <option>Lagos</option>
                                    <option>Kano</option>
                                    <option>Enugu</option>
                                    <option>Oyo</option>
                                    <option>Abuja</option>
                                </select>
                                <select className=' promo-link select-custom' style={{ width: '100%', margin: '4px 0' }}>
                                    <option>Lagos</option>
                                    <option>Kano</option>
                                    <option>Enugu</option>
                                    <option>Oyo</option>
                                    <option>Abuja</option>
                                </select>
                                <div className='pddtb10 delivery-return' >
                                    <span className='pddall8 '><GiReturnArrow fontSize={25} /></span>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span className='promo-link'>Door Delivery</span>
                                        <span className='fs12'> Free shipping Free shipping Free shipping Free shipping Free shipping </span>
                                    </div>
                                </div>
                                <div className='pddtb10 delivery-return' >
                                    <span className='pddall8 '><RiTruckLine fontSize={25} /></span>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span className='promo-link'>Door Delivery</span>
                                        <span className='fs12'> Free shipping Free shipping Free shipping Free shipping Free shipping </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='delivery-options br7'>
                        <span className='pddall8 promo display-flex align-cent brbtm '>SELLER INFORMATION  <a href="/seller"> <AiOutlineRight /> </a></span>
                        <div className='pddall8 brbtm'>
                            <span className=' fs14'> {product.seller.name} </span>
                            <div className='display-flex'>
                                <span className='fs12 promo brbtm promotion'>
                                    <span> 100% seller score</span>
                                    <span> 2M Followers</span>
                                </span>
                                <Button name='FOLLOW' />
                            </div>
                        </div>
                        <div className='delivery-options pddall8'>
                            <span className='fs14 flex-just-left align-cent'>Seller Performance <BsExclamationCircle /> </span>
                            <div className='display-flex'>
                                <span className='fs12 promo promotion'>
                                    <div className=' flex-just-left align-cent'> <RiShieldStarFill fontSize={16} color='green' /> <span className='fs12 pddtb3' >Order Fulfilment rate: </span></div>
                                    <div className=' flex-just-left align-cent'> <RiShieldStarFill fontSize={16} color='green' /> <span className='fs12 pddtb3'> Ouality Score: </span></div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <a href='/register/marchant'>
                        <div className='pddall8 br7' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', color: '#282828' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                                <span className='fs14'> Want to become a seller?</span>
                                <span className='fs12'> Click to create a Marchant account</span>
                            </div>
                            <AiOutlineRight />
                        </div>
                    </a>
                </div>
            </div>
            <div className='product-body-container-3'>
                <div className='detail-spec'>
                    <div className='bgclwhite margin-right br7 promo-links mrgb20 '>
                        <span className='fs20 pddtb16 bbtm ' >Product Detail</span>
                        <div className='pddall8 vh50'>
                            product details go here
                  </div>
                    </div>
                    <div className='bgclwhite margin-right br7 promo-links mrgb20'>
                        <span className='fs20 pddtb16 bbtm'  >Specifications</span>
                        <div className='pddall8 vh50'>
                            Specifications go here
                  </div>
                    </div>
                    <div className='bgclwhite margin-right br7 promo-links'>
                        <span className='fs20 pddtb16 bbtm'  >Customer Feedback</span>
                        <div className='pddall8 '>
                            Customer Feedbacks go here
                                {
                                product.reviews.map((item, index) => (
                                    <Review key={index} summary={item.rating} review={item.detail} customer={item.customername} />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div style={{ height: 'fit-content' }} className='bgclwhite product-body-side position-sticky br7' >
                    <div className='pddtb16 flex-just-left align-cent bbtm '><CgDetailsMore style={{ marginRight: '15px' }} fontSize={25} />  <span className='promo'> Product Detail</span></div>
                    <div className='pddtb16 flex-just-left align-cent bbtm'><IoIosOptions style={{ marginRight: '15px' }} fontSize={25} />   <span className='promo'> Specifications</span></div>
                    <div className='pddtb16 flex-just-left align-cent'><VscFeedback style={{ marginRight: '15px' }} fontSize={25} />  <span className='promo'> Customer Feedbacks </span></div>
                </div>
            </div>
        </div>
    )
}

export default ProductBody
