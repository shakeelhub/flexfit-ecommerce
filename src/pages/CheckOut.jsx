import React from 'react'
import { CartProvider } from '../CartContext'
import Nav from '../components/Nav' 
import Check from '../components/Check'

const CheckOut = () => {
  return (
    <>
    <CartProvider>
    <Nav/>
    <Check/>
    </CartProvider>
    </>
  )
}

export default CheckOut