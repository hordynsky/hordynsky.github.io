import React from 'react';
import formatMoney from '../lib/formatMoney';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid ${props=>props.theme.lightgrey};
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    img { 
        margin-right: 10px;
    }
    h3, p{
        margin: 0;
    }
`;

const CartItem = ({ cartItem: {item, quantity, price, id}}) => (
    <CartItemStyles>
        <img width="100px" src={item.image} alt={item.title}/>
        <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>{formatMoney(item.price * quantity)}
                {' - '}
                <em>
                    {quantity} &times; 
                    {formatMoney(item.price)} each
                </em>
            </p>
        </div>
        <RemoveFromCart id={id}/>
    </CartItemStyles>
)

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
}

export default CartItem;