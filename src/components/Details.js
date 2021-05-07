import React, { useState } from 'react'
import {data} from '../assets/data'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, calcTotal} from '../features/product/productSlice'

function Details(props) {
    const id = Number(props.match.params.id);
    const product = data.filter(item => item.id === id);


    const cart = useSelector(state => state.product.cart)
    const [cartPop, setcartPop] = useState(false);
    const [cartPopError, setcartPopError] = useState(false);

    if(cart.length>0){
        var lastItem = cart[cart.length-1].title; 
    }

    const dispatch = useDispatch();

    const handleAddCart = () => {
        var cartCheck = cart.find(item => item.id ===id);
        if (cartCheck){

            setcartPopError(true)
            setTimeout(() => {
                setcartPopError(false)
            }, 5000);
        } else {
            dispatch(addToCart(id))
        
            setcartPop(true)
            setTimeout(() => {
                setcartPop(false)
            }, 5000);
        }
        
        setTimeout(() => {
            dispatch(calcTotal())
        }, 100);
    }

    return (
        <React.Fragment>
            <div className="header-mini">
                <h2 className="prod-name">{product[0].title}</h2>
            </div>
            <div className="container prod-cont">
                <div className="row">
                    <div className="text-center col-sm-6 justify-content-center align-self-center">
                        <img className="img-fluid" src={product[0].image} alt={product.title}/>
                        <div className="mt-3"> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                        <div className="text-muted mb-3">{product[0].reviews} reviews</div> 
                        <button type="button" onClick={handleAddCart} className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                        
                    </div>  
                    <div className="text-center col-sm-6 justify-content-center align-self-center">
                        <h3 className="text-center">{product[0].title}</h3>
                        <p>{product[0].body}</p>
                    </div>
                </div>
            </div>   
            {cartPop?  <div className="cartPop cartPopSuccess">
                <p>{lastItem} has been added to cart</p>
                <Link to="/cart">View Cart</Link>
           </div>:null}
           {cartPopError?  <div className="cartPopError cartPop">
                <p>{product[0].title} is already in cart</p>
                <Link to="/cart">View Cart</Link>
           </div>:null}       
        </React.Fragment>
    )
}

export default Details
