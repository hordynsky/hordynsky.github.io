import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';
import CartCount from './CartCount';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';

const Nav = () => {
    return (
        
            <User>
                {
                    ({data: { me }}) => (
                        <NavStyles>
                            <Link href="/items">
                                <a href="items">Shop</a>
                            </Link>
                            {
                                me && (
                                    <>
                                        <Link href="/sell">
                                            <a href="sell">Sell</a>
                                        </Link>
                                        <Link href="/orders">
                                            <a href="orders">Orders</a>
                                        </Link>
                                        <Link href="/me">
                                            <a href="me">Me</a>
                                        </Link>
                                        <Signout/>
                                        <Mutation mutation={TOGGLE_CART_MUTATION}>
                                            {(toggleCart) => (
                                                <button onClick={toggleCart}>My Cart 
                                                <CartCount count={me.cart.reduce((tally, cartItem) => tally+cartItem.quantity, 0)}></CartCount>
                                                </button>
                                            )}
                                        </Mutation>
                                    </>
                                )
                            }

                            {!me && (
                                <Link href="/signup">
                                    <a href="signup">Signin</a>
                                </Link>
                            )}                                         
                        </NavStyles>
                    )
                }
            </User>
            
    );
};

export default Nav;