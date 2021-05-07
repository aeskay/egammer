import React from 'react'
import {  useSelector } from 'react-redux';
import Product from './Product';

function FeaturedProducts() {

    const products = useSelector(state => state.product.products);
    const featured = products.filter(item => item.id <= 4)
    return (
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
            {featured.map(item => {
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
    )
}

export default FeaturedProducts
