"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'x40to373', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // Use today's date
  useCdn: true, // Faster response, but may serve cached data
});

interface Product {
    _id: string;
    title: string;
    description: string;
    discountPercentage: number;
    price: number;
    imageUrl: string;
    productImage: {
        assest: {
            _ref: string;
        };

    };
    tags: string[];

}


const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query =
                `[type == "product"]{
           _id,
           title,
           price,
           description,
           discountPercentage,
           "imageUrl":productImage.assest->url,
           tags
           
           
           
           }
           `;
            const data = await client.fetch(query);
            setProducts(data);

        } catch (error) {
            console.error("Error fetching Products:", error);
        }


    };


    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart`);
    };

    const truncateDescription=(description:string)=>{
        return (description.length)>100 ?description.substring(0,100)+"...":description;
    };


    useEffect(() => {
        fetchProducts();
    }, []);

   

    return (
        <div className="p-4">
            <h2>Products from API's state</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow-md rounded-l gap-4 hover:shadow-lg transition-shadow duration-300">
                       {product &&( <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-md" />)}

                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product && product.title}</h2>
                            <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product && product.description)}</p>
                            <div>
                                <p className="text-slate-600 font-bold">${product.price}</p>
                                {product.discountPercentage > 0 && (

                                    <p className="text-sm text-green-600">
                                        {product.discountPercentage}% OFF
                                    </p>
                                )}
                            </div>


                        </div>



                        <div className="mt-2 flex flex-wrap gap-2">
                            {product.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-slate-400 text-black  px-2 py-1">
                                    {tag}
                                </span>
                            ))}

                        </div>

                        {/*Add to cart functionality*/}


                        <button
                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                            onClick={() => addToCart(product)} >

                            Add to cart


                        </button>

                    </div>
                ))}


                {/*Cart summary */}

                <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-lf font-black text-red-800">Cart Summary</h2>
                    {cart.length > 0 ? (
                        <ul className="space-y-4">
                            {cart.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md ">

                                    <div>
                                        <p className="font-medium text-slate-900">{item.title}</p>
                                        <p className="text-sm text-blue-600" >${item.price.toFixed(2)}</p>
                                    </div>
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        width={50}
                                        height={50}
                                        className="rounded-md" />

                                </li>
                            ))}

                        </ul>
                    ) : (
                        <p className="text-black text-center">Your cart is empty. Please add your products</p>
                    )}

                </div>



            </div>
        </div>
    )









};

export default ProductCards;