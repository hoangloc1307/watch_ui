import { Link } from 'react-router-dom';

const CartItem = ({ product }) => {
    const handleAmountChange = e => {
        e.preventDefault();
        console.log('Amount Change');
    };

    return (
        <Link to={'/'} className="flex items-center justify-between bg-white rounded-xl p-2">
            <img src={product.image} alt="fs" className="w-16 rounded-full bg-primary bg-opacity-10" />
            <div className="w-32">
                <h3 className="text-xs capitalize font-bold mb-1">{product.name}</h3>
                <p className="text-xs text-primary text-right italic tracking-wider">
                    3,000,000<sup>đ</sup>
                </p>
            </div>
            <div className="flex flex-col w-9">
                <button
                    className="p-1 bg-primary bg-opacity-10 rounded-lg active:text-white active:bg-opacity-30"
                    onClick={handleAmountChange}
                >
                    <span className="material-symbols-outlined block text-sm">remove</span>
                </button>
                <span className="block text-center text-xs my-1">{product.amount}</span>
                <button
                    className="p-1 bg-primary bg-opacity-10 rounded-lg active:text-white active:bg-opacity-30"
                    onClick={handleAmountChange}
                >
                    <span className="material-symbols-outlined block text-sm">add</span>
                </button>
            </div>
        </Link>
    );
};

export default CartItem;
