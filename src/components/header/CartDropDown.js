import React from 'react'
import '../../styles/header.styles.scss'
import DefaultButton from '../form/DefaultButton'



 const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <DefaultButton>GO TO CART</DefaultButton>
        </div>
    )
}


export default CartDropDown