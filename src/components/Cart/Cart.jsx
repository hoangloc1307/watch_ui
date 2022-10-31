import { useDispatch, useSelector } from 'react-redux';

import { togglePopUp } from '~/app/slices/popUp.slice';
import { product1_0, product2_0, product3_0, product4_0, product5_0 } from '~/assets/images';
import Button from '../Button';
import CartItem from './CartItem';

export default function Cart() {
    const dispatch = useDispatch();

    const show = useSelector(state => state.popup.items.cart);

    return (
        <div
            id="cart-popup"
            className={`fixed z-[1] inset-0 bottom-my-navigation-height duration-700 ${
                show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            } lg:bottom-0`}
        >
            {/* Overlay */}
            <div
                className={`w-full h-full bg-black bg-opacity-70`}
                onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
            />

            {/* Cart container */}
            <div
                className={`absolute top-0 right-0 w-[300px] h-full bg-slate-100 duration-700 ease-in-out ${
                    show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                } text-dark lg:w-[500px]`}
            >
                <div className="border-b-2 border-primary border-opacity-30 rounded-b-xl h-14 px-4 py-2 bg-white relative">
                    <Button
                        icon="chevron_left"
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        onClick={() => dispatch(togglePopUp({ popUp: 'cart', show }))}
                    />
                    <h2 className="text-base capitalize text-center">My Cart</h2>
                    <p className="text-xs text-center font-medium text-primary">Items: 25</p>
                </div>
                {/* Cart items */}
                <div
                    className={`p-2 flex flex-col gap-2 h-my-cart-item-height-show overflow-y-auto lg:h-my-cart-item-height-hide`}
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
                <div className="flex justify-between items-end p-4 h-20 border-t-2 border-primary border-opacity-30 rounded-t-xl bg-white">
                    <p className="flex flex-col">
                        <span>Total:</span>
                        <span className="font-semibold text-primary">
                            180,000,000<sup>đ</sup>
                        </span>
                    </p>
                    <Button icon="shopping_cart_checkout" background onClick={() => console.log('Go to checkout')}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
}
