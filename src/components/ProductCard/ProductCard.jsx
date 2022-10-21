import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <Link
        to="/"
        className="block bg-white p-2 mt-20 rounded-xl text-center w-full min-h-[186px] shadow-[2px_2px_5px_#d9d9d9,-2px_-2px_5px_#ffffff] relative"
    >
        <img src={product.image} alt={product.name} className="aspect-square object-contain inline-block -mt-20" />
        <span className="absolute block w-1/2 max-w-[100px] h-5 bg-black blur opacity-20 rounded-[50%] left-1/2 [transform:rotateX(70deg)_translateX(-50%)]"></span>
        <h3 className="text-xs font-semibold mt-10 line-clamp-2">{product.name}</h3>
        <p className="mt-3 tracking-wider italic text-xs text-primary">
            3,000,000<sup>đ</sup>
        </p>
    </Link>
);

export default ProductCard;
