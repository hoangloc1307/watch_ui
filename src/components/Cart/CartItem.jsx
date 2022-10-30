import { Link } from 'react-router-dom';
import Button from '../Button';

export default function CartItem({ product }) {
    const handleAmountChange = e => {
        e.preventDefault();
        console.log('Amount Change');
    };
    console.log('CartItem');
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
            <div className="flex flex-col items-center w-9">
                <Button
                    className="w-full h-full p-0 bg-opacity-50 hover:bg-opacity-60 active:bg-opacity-70"
                    background
                    onClick={handleAmountChange}
                >
                    <span className="material-symbols-outlined text-base">add</span>
                </Button>
                <span className="block text-center text-sm my-1 cursor-default">{product.amount}</span>
                <Button
                    className="w-full h-full p-0 bg-opacity-50 hover:bg-opacity-60 active:bg-opacity-70"
                    background
                    onClick={handleAmountChange}
                >
                    <span className="material-symbols-outlined text-base">remove</span>
                </Button>
            </div>
        </Link>
    );
}
