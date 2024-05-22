import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface IProducts {
    category: string,
    description: string,
    id: number,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
    title: string,
    price: number
}

const Products = () => {
    const [Products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const products = await res.json();
                setProducts(products)
            } catch (error: any) {
                console.log(error)
            }
        }
        getProducts();
    }, [])
    console.log(Products)
    return (
        <div className='grid grid-cols-4 gap-10 p-10'>
            {
                Products.map((products) => (
                    <div key={products.id} className="border p-5 rounded-lg space-y-5">
                        <div className="flex items-center justify-center">
                            <img src={products.image} alt={products.title} className="h-32 w-32" />
                        </div>
                        <div className="border-t mt-2">
                            <p className="font-bold capitalize">{products.category}</p>
                            <p className="line-clamp-1">{products.title}</p>
                            <div><span className="font-bold">Rating:</span> {products.rating.rate}, {products.rating.count}</div>
                            <p><span className="font-bold">Price:</span> {products.price}</p>
                            <p className="line-clamp-2">{products.description}</p>
                        </div>
                        <div>
                            <Link className="bg-red-500 text-white px-4 py-2 rounded-lg " to={`/products/${products.id}`}>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
