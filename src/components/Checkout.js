import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {resetCart} from '../features/product/productSlice';
import './Checkout.css';

function Checkout() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.product.cart);
    const total = useSelector(state => state.product.total);

    const handleSubmit = (e) => {
        
        setTimeout(() => {
            document.querySelector('.check-success').classList.remove('no-display');
           
        }, 1000);
        dispatch(resetCart());
        e.preventDefault();
    }
    return (
        <div>
            <div className="header-mini">
                <h2 className="prod-name">Checkout</h2>
            </div>

            <div className="">
            <div className="row cart-head">
                <div className="container">
                <div className="row">
                    <p></p>
                </div> 
                
                    <div className="d-flex justify-content-around">
                        <span className="step step_complete"> 
                            <Link to="/cart" className="check-bc">Cart</Link> 
                            <span className="step_line step_complete"> </span> 
                            <span className="backline"> </span> 
                        </span>
                        <span className="step step_complete"> 
                            <Link to="/checkout" className="check-bc">Checkout</Link>
                            
                            <span className="step_line step_complete"></span> 
                        </span>
                        <span className="step_ty"> 
                            <span className="step_thankyou check-bc">Thank you</span>
                            
                            <span className="step_line_ty"></span> 
                        </span>
                        
                    </div>
                
                <div className="row">
                    <p></p>
                </div>
                </div>
            </div>    
            <div className="container cart-body">
                <form className="form-horizontal">
                
                    {/* <!--SHIPPING METHOD--> */}
                <div className="row">
                    
                    
                    <div className="panel panel-info col-md-6">
                        <div className="panel-heading">Address</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-12">
                                    <h4>Shipping Address</h4>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Country:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="country" />
                                </div>
                            </div>
                            <div className="form-group row container">
                                <div className="col-md-6 col-xs-12">
                                    <strong>First Name:</strong>
                                    <input type="text" name="first_name" className="form-control"  />
                                </div>
                                
                                <div className="col-md-6 col-xs-12">
                                    <strong>Last Name:</strong>
                                    <input type="text" name="last_name" className="form-control"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Address:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="address" className="form-control"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>City:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="city" className="form-control"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>State:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="state" className="form-control"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="zip_code" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Phone Number:</strong></div>
                                <div className="col-md-12"><input type="text" name="phone_number" className="form-control" /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Email Address:</strong></div>
                                <div className="col-md-12"><input type="text" name="email_address" className="form-control" /></div>
                            </div>
                        </div>
                    </div>
                {/* <!--REVIEW ORDER--> */}
                <div className="panel panel-info col-md-6">
                        <div className="panel-heading d-flex justify-content-between">
                            <div>Review Order</div>
                            <div className="pull-right">
                                <small>
                                    <Link to="/cart" className="afix-1">Edit Cart</Link>
                                </small>
                            </div>
                        </div>
                        <div className="panel-body">
                            {cart.length>0?
                            cart.map(item => {
                                return(
                                    <div key={item.id}>
                                <div className="d-flex justify-content-between my-2">
                                    <div className="col-sm-3 col-xs-3">
                                        <img alt="" height="50px" className="img-responsive" src={item.image} />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <div className="col-xs-12">{item.title}</div>
                                        <div className="col-xs-12"><small>Quantity:<span>{item.inCart}</span></small></div>
                                    </div>
                                    <div className="col-sm-3 col-xs-3 text-right">
                                        <h6><span>$</span>{item.inCart * item.price}</h6>
                                        
                                    </div>
                                </div>
                                <div className="form-group"><hr /></div>
                                </div>)
                            })
                            
                            :
                            <h2 className="prod-name">No item in cart</h2>
                            }
                        

                            {cart.length>0?
                            <div>
                                <div className="">
                                <div className="col-xs-12">
                                    <strong>Subtotal</strong>
                                    <div className="pull-right"><span>$</span><span>{total}</span></div>
                                </div>
                                <div className="col-xs-12">
                                    <small>Shipping</small>
                                    <div className="pull-right"><span>$50</span></div>
                                </div>
                            </div>
                            </div>
                            :
                            null
                            }
                            
                            <div className="form-group"><hr /></div>
                            {total?
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <strong>Order Total</strong>
                                    <div className="pull-right"><span>$</span><span>{total + 50}</span></div>
                                </div>
                            </div>
                            :null}
                        </div>
                    </div>
                    {/* <!--REVIEW ORDER END--> */}



                </div>
                    {/* <!--SHIPPING METHOD END-->
                    <!--CREDIT CART PAYMENT--> */}
                    <div className="panel panel-info">
                        <div className="panel-heading"><span><i className="glyphicon glyphicon-lock"></i></span> Secure Payment</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-12"><strong>Card Type:</strong></div>
                                <div className="col-md-12">
                                    <select id="CreditCardType" name="CreditCardType" className="form-control">
                                        <option value="5">Visa</option>
                                        <option value="6">MasterCard</option>
                                        <option value="7">American Express</option>
                                        <option value="8">Discover</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Credit Card Number:</strong></div>
                                <div className="col-md-12"><input type="text" className="form-control" name="car_number" /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Card CVV:</strong></div>
                                <div className="col-md-12"><input type="text" className="form-control" name="car_code" /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <strong>Expiration Date</strong>
                                </div>
                                <div className="row container">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <select className="form-control" name="">
                                            <option value="">Month</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                    </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <select className="form-control" name="">
                                            <option value="">Year</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                            <option value="2031">2031</option>
                                    </select>
                                    </div>
                                                                    
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <span>Pay secure using your credit card.</span>
                                </div>
                                <div className="col-md-12">
                                    <ul className="cards">
                                        <li className="visa hand">Visa</li>
                                        <li className="mastercard hand">MasterCard</li>
                                        <li className="amex hand">Amex</li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <button onClick={handleSubmit} className="btn bg-cart btn-submit-fix">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--CREDIT CART PAYMENT END--> */}
 
                
                </form>
            </div>
            <div className="check-success no-display">
                <div className="text-center">
                    <h1 className="headText">THANK YOU!</h1>
                    <h2 className="prod-name">Order has been placed!</h2>
                    <br/><br/>
                    <p className="bodyText">
                        Congratulations, your order has been successfully placed and we're working on it.<br/> You'll get more information in your mail.
                    </p>
                    <div>
                    <Link to="/">
                        <button type="button" className="btn bg-ty m-2">Go Home</button>
                    </Link>
                    <Link to="/shop">
                        <button type="button" className="btn bg-ty m-2">Shop More</button>
                    </Link>
                    </div>
                    
                </div>
            </div>
    </div>
        </div>
    )
}

export default Checkout
