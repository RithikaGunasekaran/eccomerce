import React, { useState } from 'react'
import './shop.css'
import { FaHeart, FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Shop = ({shop, Filter,allcatefilter,addtocart}) => {
//toglgle
const [showDetail, setShowDetail] = useState(false)

//detail
const [detail, setDetail] = useState([])


const detailpage = (product) => {
    const detaildata = ([{product}])
    const productdetail = detaildata[0]['product']
   // console.log(productdetail)
    setDetail(productdetail)
    setShowDetail(true)
}
const closedetail = () => {
    setShowDetail(false)

}
return (
    <>
        {
            showDetail ? 
            <>
            <div className='product_detail'>
                <button className='close_btn' onClick={closedetail}><IoClose /></button>
                <div className='container'>
                    <div className='img_box'>
                        <img src={detail.image} />
                    </div>
                    <div className='info'>
                        <h4>#{detail.cat}</h4>
                        <h2>{detail.Name}</h2>
                        <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                        <h3>${detail.price}</h3>
                        <button onClick={() => addtocart (detail)}>Add to cart</button>
                    </div>
                </div>
            </div>
            </>
            :null
        }
    

<div className='shop'>
    <h2># shop</h2>
    <p>Home - shop</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h2>All categories</h2>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcatefilter()}># All</li>
                            <li onClick={() => Filter ("tv")}># tv</li>
                            <li onClick={() => Filter ("laptop")}># laptop</li>
                            <li onClick={() => Filter ("watch")}># watch</li>
                            <li onClick={() => Filter ("speaker")}># speaker</li>
                            <li onClick={() => Filter ("electronics")}># electronics</li>
                            <li onClick={() => Filter ("headphone")}># headphone</li>
                            <li onClick={() => Filter ("phone")}># phone</li>                            
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_left.avif' />
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' />
                    </div>
                </div>
                <div className='product_box'>
                <h2>Shop product</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} />
                                            <div className='icon'>
                                                <li><FaHeart /></li>
                                                <li onClick={() =>detailpage (curElm)}><FaEye /></li>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>${curElm.price}</p>
                                            <button onClick={() => addtocart (curElm)}>Add to cart</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop