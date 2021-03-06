import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import {selectCartItem} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

const CartDropdown = ({cartItems,history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
        {cartItems.length ?
        cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
        ))
        :
        <span className='empty-message'>Your card is empty</span>
    }
        </div>  
        <CustomButton onClick={()=>history.push('/chekout')}>CO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItem    
})

export default withRouter(connect(mapStateToProps)(CartDropdown));