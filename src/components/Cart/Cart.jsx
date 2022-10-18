import { product, product2, product3 } from '../../assets/images';
import CartItem from './CartItem';

const Cart = ({ show, onToggleShow }) => {
    const handleShowCart = () => {
        onToggleShow('cart', show);
    };

    return (
        <div id="cart">
            {/* Icons */}
            <span
                className={`p-1 flex flex-col items-center cursor-pointer ${show && 'text-primary'}`}
                onClick={handleShowCart}
            >
                <span class={`${show && 'fill'} material-symbols-outlined`}>shopping_bag</span>
                <span className="text-sm">Cart</span>
            </span>

            {/* Overlay */}
            <span
                className={`fixed top-0 left-0 right-0 bottom-my-navigation-height bg-black bg-opacity-40 ${
                    show
                        ? 'opacity-100 [transition:opacity_0.3s_0.3s_ease-in-out] pointer-events-auto'
                        : 'opacity-0 [transition:opacity_0.3s_ease-in-out] pointer-events-none'
                }`}
                onClick={handleShowCart}
            />

            {/* Cart */}
            <div
                className={`fixed right-0 top-0 bottom-my-navigation-height w-[300px] overflow-auto py-4 bg-white duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
            >
                <h2 className="text-lg font-semibold capitalize text-center mb-4">My Cart</h2>
                {/* Cart items */}
                <div className="bg-slate-100 p-2 rounded-xl flex flex-col gap-2">
                    {[
                        { image: product, name: 'Cart Item 1 With Long Name', price: 3100000, amount: 1 },
                        { image: product2, name: 'Cart Item 2 ', price: 3100000, amount: 12 },
                        { image: product3, name: 'Cart Item 3 With Name', price: 3100000, amount: 3 },
                    ].map(product => (
                        <CartItem key={product.name} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;
