import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let { productId} = useParams();
    const [product ,setProduct] =useState([]);
    console.log('good')
    useEffect(()=>{
        fetch("http://localhost:9000/products/"+productId)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        
        <div>
        {product && <>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.description} />
            <h2>About :</h2>{product.description}
            <div >Price:{product.price}</div>
            <h2>stock:{product.stock}</h2>

        </>}
            
            
        </div>
    );
}

export default ProductDetails;
