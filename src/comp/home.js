import React, {useState} from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { FaEye,FaHeart ,FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa";


const Home = ({addtocart}) => {
    const[trendingProduct, setTrendingProduct] = useState(Homeproduct)
  //filter
    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((curElm) =>
        {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }

//trending
    const allTrendingProduct= () => {
        setTrendingProduct(Homeproduct)
    }

    return (
    <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <h3>Silver Aluminum</h3>
                    <h2>Apple Watch </h2>
                    <p>30% off at your first order</p>
                    <Link to='/shop' className='link'>Shop Now</Link>
                </div>
            </div>
            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2 onClick={() => allTrendingProduct()}>Trending product</h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filtercate ('new')}>New</h3>
                                <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                                <h3 onClick={() => filtercate ('top')}>Top selling</h3>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                {
                                    trendingProduct.map((curElm) =>
                                    {
                                        return(
                                            <>
                                                <div className='box'>
                                                    <div className='img_box'>
                                                        <img src={curElm.image}></img>
                                                        <div className='icon'>
                                                            <div className='icon_box'>
                                                            <FaEye />
                                                            </div>
                                                            <div className='icon_box'>
                                                            <FaHeart />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='info'>
                                                        <h3>{curElm.Name}</h3>
                                                        <p>${curElm.price}</p>
                                                        <button className='btn' onClick={() => addtocart(curElm)}>Add to cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <button>show more</button>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='right_container'>
                                <div className='testimonial'>
                                    <div className='head'>
                                        <h3>Our testimonial</h3>
                                    </div>
                                    <div className='detail'>
                                        <div className='img_box'>
                                            <img src='image/T1.avif'></img>
                                        </div>
                                        <div className='info'>
                                            <h3>Alex Stephan</h3>
                                            <h4>Web designer</h4>
                                            <p>Lorem bakg jbzakg jhbfwak bjkS moaei mxowj</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='newsletter'>
                                    <div className='head'>
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className='form'>
                                        <p>Join our mailing list</p>
                                        <input type='email' placeholder='Email' autoComplete='off'></input>
                                        <button>Subscribe</button>
                                        <div className='icon_box'>
                                            <div className='icon'>
                                            <FaTwitter />
                                            </div>
                                            <div className='icon'>
                                            <FaInstagram />
                                            </div>
                                            <div className='icon'>
                                            <FaYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home