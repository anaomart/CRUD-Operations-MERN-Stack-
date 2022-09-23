import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        getProduct()
    }, [])
    function getProduct() {
        fetch(`http://localhost:9000/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }
    let {title, description,price} =product;
    const SubmitData = async (e) => {
        e.preventDefault();
        fetch(`http://localhost:9000/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => console.log(data));
    }

    return (

        <div>
            <h1>Update Product Page</h1>
            <form onSubmit={(e) => SubmitData(e)}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={
                        (e) => {
                            setProduct({...product,title:e.target.value});
                        }
                    } value={product.title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input onChange={(e) => {
                        setProduct({
                            ...product,description:e.target.value
                            })
                        console.log(product)
                    }} type="text" value={product.description} className="form-control" id="Description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input onChange={(e) => {
                        setProduct({...product,price:e.target.value})
                    }} value={product.price} type="text" className="form-control" id="price" />
                </div>
                <button type="submit" className="btn btn-primary">UPDATE</button>
            </form>

        </div>
    );
}
export default Update;