import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import './nav.css'
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Nav = ({search, setSearch,searchproduct}) => {
        const { loginWithRedirect ,logout,user, isAuthenticated } = useAuth0();
  return (
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <FaShippingFast />

            </div>
            <div className='info'>
                <p>Free Shipping on purchase of $1000</p>
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                <img src='image/logo.webp'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={searchproduct}><IoSearchSharp /></button>
            </div>
            {isAuthenticated ?
                <div className='user'>
                <div className='icon'>
                <MdOutlineLogout />
                </div>
                <div className='btn'>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
            :
            <div className='user'>
                <div className='icon'>
                <MdOutlineLogin />
                </div>
                <div className='btn'>
                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
            }
            
            
        </div>
        <div className='last_header'>
            <div className='user_profile'>
                {
                    isAuthenticated ?
                    <>
                    <div className='icon'>
                    <FaUserCircle />

                    </div>
                    <div className='info'>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                        
                    </>
                    :
                    <>
                    <div className='icon'>
                    <FaUserCircle />

                    </div>  
                    <div className='info'>
                        <p>Please Login</p>
                    </div>
                    </>
                }
            </div>
            <div className='nav'>
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/shop' className='link'>Shop</Link></li>
                    <li><Link to='/cart' className='link'>Cart</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='/contact' className='link'>Contact</Link></li>


                </ul>
            </div>
            <div className='offer'>
                <p>Flat 10% off on selected products</p>
            </div>
        </div>
    </div>
  )
}

export default Nav