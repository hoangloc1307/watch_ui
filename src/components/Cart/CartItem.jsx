import { Link } from 'react-router-dom';
import QuantityChange from '../Button/QuantityChange';

export default function CartItem({ product }) {
    const handleAmountChange = e => {
        e.preventDefault();
        console.log('Amount Change');
    };
    // Render
    return (
        <Link to={'/'} className="flex items-center justify-between bg-white rounded-xl p-2">
            {/* Image */}
            <img src={product.image} alt="fs" className="w-16 rounded-full bg-primary bg-opacity-10 lg:w-20" />
            {/* Name & price */}
            <div className="w-32 lg:w-72">
                <h3 className="text-xs capitalize mb-1 lg:text-sm lg:font-normal">{product.name}</h3>
                <p className="text-xs text-primary text-right font-medium lg:text-sm">
                    3,000,000<sup>đ</sup>
                </p>
            </div>
            {/* Amount counter */}
            <QuantityChange
                value={product.amount}
                onIncrease={handleAmountChange}
                onDecrease={handleAmountChange}
                className="w-9"
            />
        </Link>
    );
}
