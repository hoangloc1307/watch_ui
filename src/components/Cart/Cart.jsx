import { useDispatch, useSelector } from 'react-redux';

import { togglePopUp } from '~/app/slices/popUp.slice';
import { product1_0, product2_0, product3_0, product4_0, product5_0 } from '~/assets/images';
import Button from '../Button';
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch();

    const show = useSelector(state => state.popup.items.cart);
    const navigationShow = useSelector(state => state.popup.navigation);

    return (
        <div id="cart">
            {/* Icon mobile */}
            <Button
                icon="shopping_cart"
                className="lg:hidden"
                vertical
                fill={show}
                onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
            >
                Cart
            </Button>

            {/* Icon desktop */}
            <Button
                icon="shopping_bag"
                className="hidden lg:block"
                onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
            />

            {/* Overlay */}
            <span
                className={`fixed top-0 left-0 right-0 z-10 ${
                    navigationShow ? 'bottom-my-navigation-height' : 'bottom-0'
                } bg-black bg-opacity-40 ${show ? 'overlay-show ' : 'overlay-hide'} lg:inset-0`}
                onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
            />

            {/* Cart container */}
            <div
                className={`fixed right-0 top-0 z-10 ${
                    navigationShow ? 'bottom-my-navigation-height' : 'bottom-0'
                } w-[300px] overflow-auto bg-slate-100 duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                } text-dark lg:bottom-0 lg:w-[500px]`}
            >
                <h2 className="text-sm font-normal font-poppins capitalize text-center p-4 h-14 border-b-2 border-primary border-opacity-30 rounded-b-xl bg-white relative lg:text-base">
                    <Button
                        icon="chevron_left"
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
                    />
                    My Cart
                </h2>
                {/* Cart items */}
                <div
                    className={`p-2 flex flex-col gap-2 ${
                        navigationShow ? 'h-my-cart-item-height-show' : 'h-my-cart-item-height-hide'
                    } overflow-y-auto duration-1000 lg:h-my-cart-item-height-hide`}
                >
                    {[
                        { image: product1_0, name: 'Cart Item 1 With Long Name', price: 3100000, amount: 1 },
                        { image: product2_0, name: 'Cart Item 2 Short Name ', price: 2990000, amount: 12 },
                        { image: product3_0, name: 'Cart Item 3 ', price: 2890000, amount: 4 },
                        { image: product4_0, name: 'Cart Item 4 With Long Long Long Name', price: 3200000, amount: 6 },
                        { image: product5_0, name: 'Cart Item 5 With Name', price: 3000000, amount: 2 },
                    ].map((product, index) => (
                        <CartItem key={index} product={product} />
                    ))}
                </div>
                {/* Total */}
                <div className="flex justify-between items-center p-4 h-20 border-t-2 border-primary border-opacity-30 rounded-t-xl bg-white">
                    <p className="font-semibold tracking-widest text-primary italic">
                        180,000,000<sup>đ</sup>
                    </p>
                    <Button icon="shopping_cart_checkout" background onClick={() => console.log('checkout')}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
