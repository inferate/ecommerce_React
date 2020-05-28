import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shbag.svg'
import { toggleCartAction } from '../../store/actions/actions'
import '../../styles/header.styles.scss'

 const CartIcon=({toggleCartAction})=> {
    return (
        <div className="cart-icon" onClick={toggleCartAction}>
           <ShoppingIcon className="shopping-icon"/> 
           <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggleCartAction:()=>dispatch(toggleCartAction())
})
export default connect(null,mapDispatchToProps)(CartIcon)