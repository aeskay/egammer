import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Account() {
    const firstname = useSelector(state => state.user.firstname)
    const lastname = useSelector(state => state.user.lastname)
    const email = useSelector(state => state.user.email)
    const cart = useSelector(state => state.product.cart)
    return (
        <div>
            <div className="header">
                <h2 className="prod-name">{firstname.length>0?<span>{firstname + ' ' + lastname}</span>: "Not logged in"}</h2>
            </div>
            <div className="prod-name my-5">
                <h3>Account Information</h3>
            </div>
            {firstname.length>0?
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        <td>{firstname}</td>
                        <td>{lastname}</td>
                        <td>{email}</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div> :
                <div className="text-center">
                    <h2>You're not logged in.</h2>
                    <p className="">You can click below to signup or login</p>
                    <div className="text-center d-flex justify-content-around my-5"> 
                        <Link to="/login">
                            <button type="button" className="btn bg-cart">
                                <strong>Login</strong>
                            </button>
                        </Link> 
                        <Link to="/signup">
                            <button type="button" className="btn bg-cart">
                                <strong>Sign Up</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            }
            <div className="my-5"><hr/></div>
            <div className="prod-name my-5 container">
                <h3>Cart Details</h3>
            </div>
            {cart.length>0?<div>
                {cart.map(item => {
                    return <div key={item.id} className=" d-flex flex-wrap justify-content-around align-items-center p-2 m-2 border-bottom">
                        <div className="cart-flex"><img alt={item.title} src={item.image} width="50px"/></div>
                        <div className="cart-flex"><h6 className="prod-name">{item.title}</h6></div>
                        <div className="cart-flex">{item.inCart} in cart</div>
                        <div className="cart-flex"><h5><span>$</span><span className="total-price">{item.price * item.inCart}</span></h5></div>
                    </div>
                })}
                <div className="text-center d-flex justify-content-around my-5"> 
                    <Link to="/cart">
                        <button type="button" className="btn bg-cart">
                            <strong>Edit Cart</strong>
                        </button>
                    </Link> 
                    <Link to="/checkout">
                        <button type="button" className="btn bg-cart">
                            <strong>Checkout</strong>
                        </button>
                    </Link>
                </div>
            </div>:
            
            <div className="text-center">
                <h4>No item in cart</h4>
            </div>
            }
        </div>
    )
}

export default Account
