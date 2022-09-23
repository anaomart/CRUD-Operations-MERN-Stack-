import React, { useState } from 'react';


const AddProduct = () => {
    const [title,setTitle] =useState(' ')
    const [price,setPrice] =useState(' ')
    const [description,setDescription] =useState(' ')
    const SubmitData = async (e) => {
        e.preventDefault();
        fetch('http://localhost:9000/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  price:price,description:description,title:title})
        }).then(res=>res.json())
        .then(data => console.log(data));
    
        
        
    }
    
    return (
        <div>
            <h1>AddProduct Page</h1>
            <form onSubmit={(e) => SubmitData(e)}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={(e) =>{ setTitle (e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Description</label>
                    <input onChange={(e) =>{ setDescription (e.target.value)}} type="text" className="form-control" id="Description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input onChange={(e) =>{ setPrice (e.target.value)}} type="text" className="form-control" id="price" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default AddProduct;
