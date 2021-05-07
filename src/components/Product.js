import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, calcTotal} from '../features/product/productSlice'
import AddToCart from './AddToCart';


function Product(props) {
    const {image, title, reviews, price, id} = props;
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
            <div className="card card-whole ">
                <Link to={`products/${id}`}>
                    <div className="card-body">
                        <div className="card-img-actions"> <img src={image} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
                    </div>
                </Link>
                <div className="card-body bg-dark text-center">
                <Link to={`products/${id}`} className="prod-name">
                   <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2 "> <span className=" text-default mb-2" data-abc="true">{title}</span> </h6> 
                    </div>
                </Link>
                <h3 className="mb-0 font-weight-semibold price">${price}</h3>
                <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                <div className="text-muted mb-3">{reviews} reviews</div> 
                    <AddToCart handleAddCart={handleAddCart}/>
                </div>
            </div>
           {cartPop?  <div className="cartPop cartPopSuccess">
                <p>{lastItem} has been added to cart</p>
                <Link to="/cart">View Cart</Link>
           </div>:null}
           {cartPopError?  <div className="cartPopError cartPop">
                <p>{title} is already in cart</p>
                <Link to="/cart">View Cart</Link>
           </div>:null}
        </React.Fragment>
    )
}

export default Product
