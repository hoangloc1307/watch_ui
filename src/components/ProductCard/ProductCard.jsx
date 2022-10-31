import { Link } from 'react-router-dom';
import Button from '../Button';

const ProductCard = ({ product }) => (
    <Link
        to="/product/abc"
        className="block w-full max-w-[200px] p-2 mt-16 mx-auto bg-white rounded-lg shadow-[4px_4px_12px_#d9d9d9,-4px_-4px_12px_#ffffff] md:mt-20"
    >
        {/* Image */}
        <div className="relative text-center">
            <img
                src={product.image}
                alt={product.name}
                className="aspect-square object-contain max-w-[100px] inline -mt-16 md:max-w-[150px] md:-mt-20"
            />
            <span className="relative block w-1/2 max-w-[100px] h-5 bg-black blur opacity-10 rounded-[50%] left-1/2 [transform:rotateX(70deg)_translateX(-50%)]" />
        </div>

        {/* Content */}
        <div className="text-center mt-3">
            {/* Name */}
            <h3 className="line-clamp-2 text-xs min-h-[32px] capitalize md:text-sm md:min-h-[40px]">{product.name}</h3>
            {/* Price */}
            <p className="my-2 text-xs text-primary font-medium md:font-bold">
                3,000,000<sup>đ</sup>
            </p>
            {/* Button */}
            <Button icon="add_shopping_cart" background className="text-xs md:text-sm">
                Add to cart
            </Button>
        </div>
    </Link>
);

export default ProductCard;
