import React from 'react';
import { Link } from 'react-router';

const CategoryCard = ({ items }) => {

    return (

        <Link to={`/categoryCard/${items}`}>
            <div  className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

                <div className="py-5 text-center">
                    <h1  className="block text-xl font-bold text-gray-800 dark:text-white" role="link">{items} </h1>

                </div>
            </div>
        </Link>


    );
};

export default CategoryCard;