import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <Link
        to="/"
        className="block bg-white p-2 mt-20 rounded-xl text-center w-full shadow-[2px_2px_5px_#d9d9d9,-2px_-2px_5px_#ffffff] relative"
    >
        {/* Image */}
        <img src={product.image} alt={product.name} className="aspect-square object-contain inline-block -mt-20" />
        <span className="absolute block w-1/2 max-w-[100px] h-5 bg-black blur opacity-10 rounded-[50%] left-1/2 [transform:rotateX(70deg)_translateX(-50%)]"></span>
        {/* Name */}
        <h3 className="text-xs font-poppins mt-10 line-clamp-2 min-h-[32px] md:text-sm">{product.name}</h3>
        {/* Price */}
        <p className="my-3 tracking-wider italic text-xs text-primary md:text-sm md:font-bold">
            3,000,000<sup>đ</sup>
        </p>
        {/* Button */}
        <button className="inline-flex items-center gap-1 py-2 px-4 rounded-xl bg-primary text-white">
            <span className="material-symbols-outlined text-sm md:text-base">add_shopping_cart</span>
            <span className="text-xs font-poppins md:text-sm">Add to cart</span>
        </button>
    </Link>
);

export default ProductCard;
