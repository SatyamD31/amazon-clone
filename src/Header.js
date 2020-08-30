import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    // getting data out of the data layer
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    };

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__search-input" />
                <SearchIcon className="header__search-icon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__option-one">Hello {user?.email}</span>
                        <span className="header__option-two">{user?'Sign Out': 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option-one">Returns</span>
                        <span className="header__option-two">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option-one">Your</span>
                        <span className="header__option-two">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__option-basket">
                        <ShoppingCartIcon />
                        <span className="header__option-two header__basket-count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Header;