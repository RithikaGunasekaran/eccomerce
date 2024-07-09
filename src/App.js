import React, { useState } from 'react'
import Nav from './comp/nav/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer/footer'
import Homeproduct from './comp/home_product'

const App = () => {

//cart
const[cart, setCart] = useState([])
//shop page product
  const[shop, setShop] = useState(Homeproduct)

//search
const[search,setSearch] = useState('')
//shop category filter
const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) => 
    {
      return product.cat === x 
    })
    setShop(catefilter)
  }

  const allcatefilter=() => {
setShop(Homeproduct)
  }

  //search

  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("enter Something !")
    setShop(Homeproduct)
  }
  else
  {
    
      const searchfilter = Homeproduct.filter((x) => 
      {
        return x.cat === search
      })
      setShop(searchfilter)
  }
}


const addtocart = (product) => {

  const exist = cart.find((x) => {
    return x.id === product.id;
  })
  if(exist){
    alert("Already added to cart")
  }
  else{
    setCart([...cart, {...product, qty:1}])
    alert("Added to cart")
  }
}
console.log(cart)
  return (
    <>
    <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout setCart = {setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App