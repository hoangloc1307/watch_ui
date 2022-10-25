import { useDispatch, useSelector } from 'react-redux';

import { togglePopUp } from '~/app/slices/popUp.slice';
import { product1, product2, product3 } from '~/assets/images';
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch();

    const show = useSelector(state => state.popup.items.cart);
    const navigationShow = useSelector(state => state.popup.navigation);

    return (
        <div id="cart">
            {/* Icon mobile */}
            <span
                className={`p-1 flex flex-col items-center cursor-pointer lg:hidden ${show && 'text-primary'}`}
                onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
            >
                <span
                    className={`${show && 'fill'} material-symbols-outlined`}
                    onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
                >
                    shopping_cart
                </span>
                <span className="text-sm">Cart</span>
            </span>

            {/* Icon desktop */}
            <span
                className="material-symbols-outlined hidden text-3xl p-2 text-white cursor-pointer lg:block lg:pr-0"
                onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
            >
                shopping_bag
            </span>

            {/* Overlay */}
            <span
                className={`fixed top-0 left-0 right-0 ${
                    navigationShow ? 'bottom-my-navigation-height' : 'bottom-0'
                } bg-black bg-opacity-40 ${show ? 'overlay-show ' : 'overlay-hide'} lg:inset-0`}
                onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
            />

            {/* Cart */}
            <div
                className={`fixed right-0 top-0 ${
                    navigationShow ? 'bottom-my-navigation-height' : 'bottom-0'
                } w-[300px] overflow-auto bg-slate-100 duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                } lg:bottom-0 lg:w-[500px]`}
            >
                <h2 className="text-sm font-normal font-poppins capitalize text-center p-4 h-14 border-b-2 border-primary border-opacity-30 rounded-b-xl bg-white relative">
                    <span
                        className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 p-4 cursor-pointer hover:text-primary active:text-primary"
                        onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
                    >
                        chevron_left
                    </span>{' '}
                    My Cart
                </h2>
                {/* Cart items */}
                <div
                    className={`p-2 flex flex-col gap-2 ${
                        navigationShow ? 'h-my-cart-item-height-show' : 'h-my-cart-item-height-hide'
                    } overflow-y-auto duration-1000 lg:h-my-cart-item-height-hide`}
                >
                    {[
                        { image: product1, name: 'Cart Item 1 With Long Name', price: 3100000, amount: 1 },
                        { image: product2, name: 'Cart Item 2 ', price: 3100000, amount: 12 },
                        { image: product3, name: 'Cart Item 3 With Name', price: 3100000, amount: 3 },
                        { image: product1, name: 'Cart Item 4 With Long Name', price: 3100000, amount: 1 },
                        { image: product2, name: 'Cart Item 5 ', price: 3100000, amount: 12 },
                        { image: product3, name: 'Cart Item 6 With Name', price: 3100000, amount: 3 },
                    ].map((product, index) => (
                        <CartItem key={index} product={product} />
                    ))}
                </div>
                {/* Total */}
                <div className="flex justify-between items-center p-4 h-20 border-t-2 border-primary border-opacity-30 rounded-t-xl bg-white">
                    <p className="font-semibold tracking-widest text-primary italic">
                        180,000,000<sup>đ</sup>
                    </p>
                    <button className="flex items-center justify-center gap-1 bg-primary text-white w-32 py-2 rounded-lg active:bg-opacity-80">
                        <span className="material-symbols-outlined text-base">shopping_cart_checkout</span>
                        <span className="font-poppins text-sm">Checkout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
