import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])
    const getAllProducts = () => {
        fetch('http://localhost:9000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: `You Are Going to Delete\n(${product.title}) ?`,
            showCancelButton: true,
        }).then(data => {
            console.log(data)
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/products/${product.id}`,
            { method: 'DELETE', }).then(res=>res.json())
            .then(data => getAllProducts())
            }
        }
        )

    }

    return (
        <div>
            <h1>Product Page</h1>

            <Link to='/products/add' className='btn btn-success' >Add Product</Link>

            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope='col'>Description</th>
                        <th scope="col m-5">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.title}</td>
                                <td>{product.price}$</td>
                                <td>{product.description.slice(0, 50)}...</td>
                                <td>
                                    <button onClick={() => deleteProduct(product)} className="btn btn-danger btn-sm">Delete</button>
                                    <Link to={`/products/${product.id}`} className="btn btn-info btn-sm m-1" >View</Link>
                                    <Link to={`/products/update/${product.id}`}className="btn btn-primary btn-sm">Update</Link>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>

        </div>
    );
}

export default Products;
