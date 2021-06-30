import React, { useContext } from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { FaCheckCircle } from 'react-icons/fa'
import '../../styles/CheckOut.css'
import Button from '../shared/primitiveComponents/Button'
import CustomRadioB from '../shared/primitiveComponents/CustomRadioB'
import COICard from './COICard'
import comma from '../shared/Comma'
import Naira from '../shared/primitiveComponents/Naira'
import Alert from '../shared/Alert'
import { cartContext } from '../../App'


function CheckOut() {
    const cart = useContext(cartContext)
    return (
        <div className='checkout-container'>
            <Alert />
            <div className='checkout cart-cent cart-flex-dirc-col'>
                <span className='fs14 grayercolor mg-tb10'> CHECKOUT </span>
                <div className='ch-address mg-bm8 br7'>
                    <div className='cart-cent cart-flex-dirc-row cart-ali-cent just-space-between ppd10 bdbm'>
                        <div className='cart-cent1 '>
                            <FaCheckCircle color='#63da7d' style={{ marginRight: "10px" }} fontSize={18} />
                            <span className='fs14'>1. ADDRESS DETAILS </span>
                        </div>

                        <span className='cart fs14 cart-color'> CHANGE </span>

                    </div>
                    <div className='cart-cent cart-flex-dirc-col pdd1646'>
                        <span className='fs14 ppd-tb2'>Customer Name</span>
                        <span className='fs13 grayercolor ppd-tb2'>Customer Address</span>
                        <span className='fs13 grayercolor ppd-tb2'>Customer Phone Number</span>
                    </div>
                </div>
                <div className='ch-delivery mg-bm8 br7'>
                    <div className='cart-cent cart-flex-dirc-row cart-ali-cent ppd10 bdbm'>
                        <FaCheckCircle style={{ marginRight: "10px" }} fontSize={18} />
                        <span className='fs14'>2. DELIVERY METHOD</span>
                    </div>
                    <div className='cart-cent cart-flex-dirc-col pdd1646'>

                        <span className='fs14'>How do you want yor Order delivered</span>
                        <div style={{ padding: '16px 0' }} className='cart-cent cart-flex-dirc-col'>
                            <div className=''>
                                <CustomRadioB name={'delivery'} /> <span className='fs14'> Door Delivery</span>
                            </div>
                            <div style={{ width: '517px' }} className='pdd-lr30'>
                                <span className='fs13 grayercolor'>Delivery between</span>
                                <span className='fs13 '> Friday 14 Mar </span>
                                <span className='fs13 grayercolor'> and </span>
                                <span className='fs13 '> Monday 03 Apr </span>
                                <span className='fs13 grayercolor'> for </span>
                                <span className='fs13 cart-color '> <Naira /> {comma(2000)} </span>
                            </div>
                            <div className='cart-cent cart-flex-dirc-row brbtm' style={{ width: '517px', height: '239px', border: '1px solid #e8e8e8', padding: '10px', borderRadius: '3px', margin: '16px 30px 0' }}>
                                <div style={{marginRight:'4px'}}>
                                   <span><BiErrorCircle className='mg-tb10' fontSize={14} /></span> 
                                </div>
                                <div className='cart-cent cart-flex-dirc-col'>
                                    <span className='fs13 mg-tb10'>- Large items (e.g. Freezers) may arrive 2 business days later than other products.</span> 
                                    <span className='fs13 mg-tb10'> - Living in Lagos, Abuja or Ibadan, PRIME Members enjoy Free Delivery on Express Items (excluding bulky items).</span>
                                    <span className='fs13 mg-tb10'>- Receive free delivery on your Express orders above N12,000 in Lagos</span>
                                    <span className='fs13 mg-tb10 cart-color'> The International Shipping and custom Fee is NON-REFUNDABLE in case of a return</span>
                                </div>
                            </div>

                        </div>
                        <div style={{ padding: '16px 0' }} className='cart-cent cart-flex-dirc-col '>
                            <div className=''>
                               <CustomRadioB name={'delivery'} /> <span className='fs14'>Pickup Station (Cheaper shipping fee than Door-delivery)</span>
                            </div>
                            <div style={{ width: '520px' }} className='pdd-lr30 '>
                                <span className='fs13 grayercolor'>Ready for pickup between</span>
                                <span className='fs13 '> Friday 14 Mar </span>
                                <span className='fs13 grayercolor'> and </span>
                                <span className='fs13 '> Monday 03 Apr </span>
                                <span className='fs13 grayercolor'> for </span>
                                <span className='fs13 '> with cheaper shipping fees </span>
                            </div>
                            <div className='pdd-lr30' style={{ width: '517px', height: '239px', border: '1px solid #e8e8e8', padding: '10px', borderRadius: '3px', margin: '16px 30px 0' }}>
                               <div style={{marginRight:'4px'}}>
                                   <span><BiErrorCircle className='mg-tb10' fontSize={14} /></span> 
                                </div>
                                <div className='cart-cent cart-flex-dirc-col'>
                                    <span className='fs13 mg-tb10'>- Large items (e.g. Freezers) may arrive 2 business days later than other products.</span> 
                                    <span className='fs13 mg-tb10'> - Living in Lagos, Abuja or Ibadan, PRIME Members enjoy Free Delivery on Express Items (excluding bulky items).</span>
                                    <span className='fs13 mg-tb10'>- Receive free delivery on your Express orders above N12,000 in Lagos</span>
                                    <span className='fs13 mg-tb10 cart-color'> The International Shipping and custom Fee is NON-REFUNDABLE in case of a return</span>
                                </div>
                            </div>
                            <span className='fs14 cart-color ppd10 pdd-lr30 mg-tb10'>SELECT A PICKUP STATION</span>
                        </div>
                        <div style={{ width: '576px', border: '1px solid #e8e8e8', borderRadius: '3px' }} className='mg-tb10'>
                            <div className='cart-cent  cart-ali-cent ppd10  bdbm'>
                                <span className='fs13'>SHIPMENT DETAILS</span>
                            </div>
                            <div className='ppd10 '>
                                shipment....
                            </div>
                        </div>
                        <div style={{ width: '100%' }} className='cart-cent cart-flex-dirc-col'>
                            <div style={{ width: '100%' }} className='cart-cent cart-flex-dirc-col'>
                                <div className='cart-cent just-space-between mg-bm8'><span className='fs14'>Subtotal</span><span className='fs14'><Naira /> {comma(2000)}</span></div>
                                <div className='cart-cent just-space-between mg-bm8 brbtm'><span className='fs14'>Delivery</span><span className='fs14'><Naira /> {comma(2000)}</span></div>
                                <div className='cart-cent just-space-between mg-tb10 '><span className='fs14'>Total</span><span className='fs16 cart-color'><Naira />{comma(2000)}</span></div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span className='fs14 grayercolor'>You will be able to add a voucher in the next step</span>
                                <Button name='PROCEED TO NEXT STEP' style={{ margin: '10px 0px', borderRadius: '0' }} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='ch-payment mg-bm8 br7'>
                    <div className='cart-cent cart-flex-dirc-row cart-ali-cent ppd10 bdbm'>
                        <FaCheckCircle style={{ marginRight: "10px" }} fontSize={18} />
                        <span className='fs14'>3. PAYMENT METHOD</span>
                    </div>
                    <div className='pdd1646'>
                        PAYMENT METHOD
                     </div>
                </div>
            </div>
            <div className='ch-order cart-cent cart-flex-dirc-col'>
                <span className='fs14 grayercolor mg-tb10'> ORDER SUMMARY </span>
                <div className='ch-address br7'>
                    <div className='cart-cent cart-flex-dirc-row cart-ali-cent ppd10 bdbm  '>
                        <span className='fs14'>YOUR ORDER( count ) </span>
                    </div>
                    <div style={{ maxHeight: '255px', overflow: 'scroll', overflowY: 'scroll' }} className='cart-cent cart-flex-dirc-col '>
                        {
                            cart.map(item => (
                                <COICard 
                                key={item.id}
                                name = {item.name}
                                count ={item.count}
                                price={item.price}
                                image ={item.image}
                                />
                            ))
                        }
        

                    </div>
                    <div className=''>
                        <div className='cart-cent cart-flex-dirc-row just-space-between pdd-lr10b8 '><span className='fs14'>Subtotal:</span ><span className='fs14'><Naira /> {comma(2000)}</span></div>
                        <div className='cart-cent cart-flex-dirc-row just-space-between pdd-lr10b8 brbtm'><span className='fs14'>Delivery Fee:</span ><span className='fs14 cart-color'><Naira /> {comma(2000)}</span></div>
                        <div className='cart-cent cart-flex-dirc-row just-space-between ppd10 brbtm'><span className='fs14'>Total:</span><span className='fs16 cart-color '> <Naira /> {comma(2000)}</span></div>
                        <div className='cart-cent1' style={{ height: '60px' }} >
                            <span className='fs14 cart-color'>MODIFY CART</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>


            </div>
        </div>
    )
}

export default CheckOut
