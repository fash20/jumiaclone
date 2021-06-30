import React from 'react'
import '../../styles/Footer.css'
import logo from '../../assets/logo4.png'
import { CgMail } from 'react-icons/cg'
import { GoMail } from 'react-icons/go'
import { GrApple, GrAppleAppStore, GrGoogle } from 'react-icons/gr'
import { GiAppleCore } from 'react-icons/gi'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { BiCartAlt } from 'react-icons/bi'

const FBC = [
    {
        title :"nesciunt N",
        lists : [
            {name:'Lorem omnis iste natus ', link:'/'},
            {name:'Lorem error sit voluptatem ', link:'/'},
            {name:'accusantium doloremque ', link:'/'},
            {name:'laudantium, totam rem aperiam', link:'/'},
            {name:'illo inventore veritatis', link:'/'},
            {name:'et quasi ', link:'/'},
        ]
    },
    {
        title :"sequi",
        lists : [
            {name:'architecto beatae vitae', link:'/'},
            {name:'dicta sunt explicabo. ', link:'/'},
            {name:'Nemo enim ipsam', link:'/'},
            {name:' voluptatem quia', link:'/'},
            {name:' voluptas sit aspernatur', link:'/'},
            {name:'Lorem ipsum', link:'/'},
        ]
    },
    {
        title :"voluptatem ",
        lists : [
            {name:'eque porro ', link:'/'},
            {name:'dicta sunt explicabo. ', link:'/'},
            {name:'Nemo enim ipsam', link:'/'},
            {name:' voluptatem quia', link:'/'},
            {name:' voluptas sit aspernatur', link:'/'},
            {name:'Lorem ipsum', link:'/'},
        ]
    },
    {
        title :"ratione",
        lists : [
            {name:' aut odit aut fugit', link:'/'},
            {name:'sed quia consequuntur', link:'/'},
            {name:'Lorem ipsum', link:'/'},
            {name:'magni dolores eos qui ', link:'/'},
            {name:'Lorem ipsum', link:'/'},
            {name:'Lorem ipsum', link:'/'},
        ]
    },
]

function Footer() {
    return (
        <div className='footer-cont '>

            <div className='footer-top-container cart-cent1'>
                <div className='ftc-w cart-cent cart-flex-dirc-row just-space-between'>
                    <div className='footer-side-item cart-cent  cart-flex-dirc-row '>
                        <div className='lo-con'>
                            <a href='/'><img className='logo-wrapper' style={{ maxHeight: '100%', maxWidth: '100%' }} src={logo} /></a>
                        </div>

                        <span className='logo-text'>e-shop</span>
                    </div>
                    <div className='footer-middle-div ' >
                        <div className='cart-cent cart-flex-dirc-col mg-tb10' >
                            <span className='fs12 '>NEW TO ESHOP </span>
                            <span className='fs12'>Subscribe to our newsletter to get updates on our latest offers!</span>
                        </div>
                        <div className='cart-cent cart-flex-dirc-row'>
                            <div className='footer-form cart-cent1'>
                                <GoMail className='footer-form-icon' />
                                <input type='text' />
                            </div>
                            <button className='button' >male</button>
                            <button className='button' >female</button>
                        </div>



                    </div>
                    <div className='footer-side-item2'>
                        <div className='cart-cent cart-flex-dirc-row mg5 pdd-lr10'>
                            <div className=' cart-cent1 fmd-cont'>
                                <BiCartAlt fontSize={30} />
                            </div>
                            
                            <div className='cart-cent cart-flex-dirc-col'>
                                 <span className='fs16 '>Download e-shop Apps</span>
                                 <span className='fs12 '>Leorem epsum</span>
                            </div>
                            
                        </div>
                       
                        <span></span>
                        <div className='cart-cent cart-flex-dirc-row pdd-lr10'>
                            <div className='button button2 cart-cent cart-flex-dirc-row align-cent'>
                                
                                <FaApple className='pdd2' fontSize={22} />
                                <div className='cart-cent cart-flex-dirc-col align-cent'>
                                    <span className='tiny-text'>Download on the</span>
                                    <span>Apple Store</span>
                                </div>
                            </div>
                            <div className='button button2 cart-cent cart-flex-dirc-row align-cent'>
                                <FaGooglePlay className='pdd2' fontSize={18} />
                                
                                <div className='cart-cent cart-flex-dirc-col align-cent pdd2'>
                                    <span className='tiny-text'>Download on the</span>
                                    <span>Google Play</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='footer-bottom-container cart-cent1'>
                <div className='ftc-w cart-cent cart-flex-dirc-row '>
                    <div className='fbc-cont'>
                        {
                            FBC.map((item,index)=>(
                                <div className='fbc-div' key={index}>
                                    <div className='pddtb10 fs13 uppercase' >
                                        {
                                            item.title
                                        }
                                    </div>
                                    <div className='cart-cent cart-flex-dirc-col fs12'>
                                    {
                                        item.lists.map((item,index) => (
                                            <a key={index} href ={item.link}><div className='fbc-link'>{item.name}</div></a>
                                        ))
                                    }
                                    </div>
                                </div>
                            ))
                        }
                        

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
