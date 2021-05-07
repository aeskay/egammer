import React from 'react'

function AddToCart(props) {
    const {handleAddCart} = props;
    return (
        <button type="button" onClick={handleAddCart} className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
    )
}

export default AddToCart
