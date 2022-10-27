import { Link } from 'react-router-dom';
import Button from '../Button';

const ProductCard = ({ product }) => (
    <Link
        to="/"
        className="block bg-white p-2 mt-20 rounded-xl shadow-[2px_2px_5px_#d9d9d9,-2px_-2px_5px_#ffffff] max-w-[250px]"
    >
        {/* Image */}
        <div className="relative text-center">
            <img
                src={product.image}
                alt={product.name}
                className="aspect-square object-contain max-w-[150px] inline -mt-20"
            />
            <span className="relative block w-1/2 max-w-[100px] h-5 bg-black blur opacity-10 rounded-[50%] left-1/2 [transform:rotateX(70deg)_translateX(-50%)]"></span>
        </div>

        {/* Content */}
        <div className="text-center mt-10">
            {/* Name */}
            <h3 className="line-clamp-2 min-h-[40px] text-sm font-poppins capitalize md:text-base md:min-h-[48px]">
                {product.name}
            </h3>
            {/* Price */}
            <p className="mt-2 mb-5 tracking-wider italic text-sm text-primary md:text-base md:font-bold">
                3,000,000<sup>đ</sup>
            </p>
            {/* Button */}
            <Button icon="add_shopping_cart" background>
                Add to cart
            </Button>
        </div>
    </Link>
);

export default ProductCard;
