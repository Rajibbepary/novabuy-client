import heart_icon from '../../assets/heart_icon.svg'
import  star_icon from '../../assets/star_icon.svg'
 import  star_dull_icon from '../../assets/star_dull_icon.svg'
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {

        const {product_image, product_title, description, price, _id} = product;

    return (

        <>
         <Link to={`/product/${_id}`}>
         <div
            className="flex flex-col items-start gap-0.5 mb-10  max-w-[200px] w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-500 bg-opacity-10 rounded-lg w-full h-52 flex items-center justify-center">
                <img
                    src={product_image}
                   alt={product_title}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <img
                        className="h-3 w-3"
                        src={heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">{product_title}</p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{description}</p>
            <div className="flex items-center gap-2">
                <p className="text-xs">{4.5}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <img
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(4)
                                    ? star_icon
                                    : star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium"> ${price}</p>
                
            </div>
        </div>
         </Link>
        </>
    );
};

export default ProductsCard;