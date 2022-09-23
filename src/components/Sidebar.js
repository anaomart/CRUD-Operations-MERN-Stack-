import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
const Sidebar = () => {
    return (
        <div>
            <ul className='list-unstyled'>
                <li>
                    <Link to='/products'>get All Products</Link>
                </li>
            
                <li>
                    <Link to='/categories'>get All Categories</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
