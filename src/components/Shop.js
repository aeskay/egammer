import React from 'react';
import {  useSelector } from 'react-redux';
import Product from './Product';

function Shop(props) {
    const products = useSelector(state => state.product.products);

    return (
        <div>
           <div className="header-mini">
                <h2 className="prod-name">Shop</h2>
            </div> 
            <div className="row" style={{display:"flex", justifyContent:"center"}}>
                {products.map(item => {
                    return <div key={item.id} className="col-sm-6 col-md-6 col-lg-3 prod-div">
                        <Product 
                            image={item.image} 
                            id={item.id}
                            title={item.title}
                            reviews ={item.reviews}
                            price={item.price}                    
                        />
                    </div>
                })}
            </div>
        </div>
    );
}

export default Shop;