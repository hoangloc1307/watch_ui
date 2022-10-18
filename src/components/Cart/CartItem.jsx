import { Link } from 'react-router-dom';

const CartItem = ({ product }) => (
    <Link to={'/'} className="flex items-center gap-3 bg-white rounded-2xl p-2">
        <img src={product.image} alt="fs" className="w-[65px] rounded-full bg-primary bg-opacity-10" />
        <div className="min-w-[144px]">
            <h3 className="text-xs capitalize text-right text-gray-500 font-semibold">{product.name}</h3>
            <p className="text-primary text-right">3,000,000đ</p>
        </div>
        <div className="flex flex-col w-12">
            <button className="flex items-center justify-center p-1.5 active:text-primary">
                <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="block text-center">{product.amount}</span>
            <button className="flex items-center justify-center p-1.5 active:text-primary">
                <span className="material-symbols-outlined">add</span>
            </button>
        </div>
    </Link>
);

export default CartItem;
