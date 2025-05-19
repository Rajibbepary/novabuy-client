

import { useLoaderData } from "react-router-dom";

const ProducDetails = () => {
    const product = useLoaderData();

const {product_image, description, price, category, discount, product_title } = product;


    return product && (
        <div className="max-w-6xl  px-6 w-10/12 mx-auto my-14">
          
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={product_image} className="w-4/5 h-4/5 md:w-full md:h-full" alt="Selected product" />

                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{category}</h1>
                    <h1 className="text-xl font-medium">{product_title}</h1>
               
                    <div className="flex items-center gap-0.5 mt-1 text-orange-600">
                        {Array(5).fill('').map((_, i) => (
                            product.rating > i ? (
                                    <svg
                                        key={i}
                                        width="14"
                                        height="13"
                                        viewBox="0 0 18 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-orange-600"
                                        >
                                        <path
                                            d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                                            fill="currentColor"
                                        />
                                        </svg>


                            ) : (
                               <svg
                                width="14"
                                height="13"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-orange-600"
                                >
                                <path
                                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                                    fill="currentColor"
                                    />
                                    </svg>

                                                        )
                        ))}
                        <p className="text-base ml-2 ">({product.rating})</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 ">Discount: ${discount}</p>
                        <p className="text-2xl font-medium">MRP: ${price}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {/* {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))} */}
                        {description}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-orange-500 text-white hover:bg-orange-400 transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
)

};

export default ProducDetails;