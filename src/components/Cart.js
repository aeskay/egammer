import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {removeCart, increaseCart, decreaseCart, calcTotal} from '../features/product/productSlice';
import CreditCardIcon from '@material-ui/icons/CreditCard';

function Cart() {
    const cart = useSelector(state => state.product.cart);
    const totalSum = useSelector(state => state.product.total)

    const dispatch = useDispatch();

    const modCart =()=>{
        console.log()
    }

    const increment = (id) =>{
        dispatch(increaseCart(id));

        setTimeout(() => {
            dispatch(calcTotal())
        }, 100);
        
    }

    const decrement = (id, inCart) =>{
        if(inCart>1){
            dispatch(decreaseCart(id));
            setTimeout(() => {
                dispatch(calcTotal())
            }, 100);
        }
        
    }

    const removeFromCart = (id) => {
        dispatch(removeCart(id))

        setTimeout(() => {
            dispatch(calcTotal())
        }, 100);
    }

    // var initTotal = [];
    // const initArr= document.getElementsByClassName('total-price');
    // for(var k =0; k<initArr.length; k++){
    // const initSum = initArr[k].innerHTML
    //     initTotal.push(Number(initSum))
    // }
    // if(initArr.length>0){
    //     window.initGrandSum = initTotal.reduce((item, cum)=> {
    //         return item+cum
    //     })
    // }

    

    return (
        <div>
            <div className="header-mini">
                <h2 className="prod-name">Cart</h2>
            </div>
            <div>
                {cart.length>0? cart.map(item => {
                    return <div key={item.id} className=" d-flex flex-wrap justify-content-around align-items-center p-2 m-2 border-bottom">
                        <div className="cart-flex"><img alt={item.title} src={item.image} width="70px"/></div>
                        <div className="cart-flex"><h6 className="prod-name">{item.title}</h6></div>
                        <div className="cart-flex"><h5><span>$</span><span className="total-price">{item.price * item.inCart}</span></h5></div>
                        <div className="cart-flex">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button type="button" className="btn-cart btn-minus"   onClick={()=>decrement(item.id, item.inCart)}>
                                        <span className="fa fa-minus"></span>
                                    </button>
                                </span>
                                        <input type="text" name="quant[2]" className="form-control input-number" value={item.inCart} onChange={modCart}/>
                                <span className="input-group-btn">
                                    <button type="button" className="btn-cart btn-plus" onClick={()=>increment(item.id)}>
                                        <span className="fa fa-plus"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="cart-flex"><button onClick={() => removeFromCart(item.id)} className="bg-cart btn">X</button></div>

                    </div>
                }): <h2 className="text-center" style={{height:"70vh"}}>No item in cart yet!</h2>}
            </div><br/><br/>

            <div className="text-center">
                <h2 className="prod-name" style={{color:"black"}}>Total = ${totalSum}</h2>
                <Link to="/checkout">
                    <button type="button" className="btn bg-cart">
                        <strong><CreditCardIcon></CreditCardIcon> Pay ${totalSum} Now</strong>
                    </button>
                </Link> 
            </div>
        </div>
    )
}

export default Cart
