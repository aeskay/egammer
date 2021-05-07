import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';

function Menu(props) {
    const {handleLeave, handleOver} = props;
    const firstname = useSelector(state => state.user.firstname)
    const lastname = useSelector(state => state.user.lastname)

    return (
        <div className="nav-menu-div" onMouseOver={handleOver} onMouseLeave={handleLeave}>
            <div className="nav-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            {
                firstname.length>0?
                <div className="nav-user">
                <Link to="/cart"><ShoppingCartIcon style={{color:"red"}}></ShoppingCartIcon>Cart</Link>
                    <Link to="/account"><span className="avatar" style={{}}>{firstname[0].toUpperCase()+lastname[0].toUpperCase()}</span> My Account</Link>
                    <Link to="/login">Logout</Link>

                </div>:
                <div className="nav-user">
                <Link to="/cart"><ShoppingCartIcon style={{color:"red"}}></ShoppingCartIcon>Cart</Link>
                    <Link to="/login"><AccountCircleIcon style={{color:"red"}}></AccountCircleIcon>Login</Link>
                    <Link to="/signup">Sign Up</Link>
    
                </div>

            }
            
        </div>
    );
}

export default Menu;