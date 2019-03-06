import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const  Nav = () => {
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

export default  Nav;