import { Link } from 'react-router-dom';

const CartItem = ({ product }) => {
    const handleAmountChange = e => {
        e.preventDefault();
        console.log('Amount Change');
    };

    return (
        <Link to={'/'} className="flex items-center justify-between bg-white rounded-xl p-2">
            {/* Image */}
            <img src={product.image} alt="fs" className="w-16 rounded-full bg-primary bg-opacity-10" />
            {/* Name & price */}
            <div className="w-32 lg:w-80">
                <h3 className="text-xs capitalize font-poppins mb-1">{product.name}</h3>
                <p className="text-xs text-primary text-right italic tracking-wider">
                    3,000,000<sup>đ</sup>
                </p>
            </div>
            {/* Amount counter */}
            <div className="flex flex-col w-9">
                <button
                    className="p-1 bg-primary bg-opacity-10 rounded-lg active:text-white active:bg-opacity-30"
                    onClick={handleAmountChange}
                >
                    <span className="material-symbols-outlined block text-base">add</span>
                </button>
                <span className="block text-center text-sm my-1 font-semibold">{product.amount}</span>
                <button
                    className="p-1 bg-primary bg-opacity-10 rounded-lg active:text-white active:bg-opacity-30"
                    onClick={handleAmountChange}
                >
                    <span className="material-symbols-outlined block text-base">remove</span>
                </button>
            </div>
        </Link>
    );
};

export default CartItem;
