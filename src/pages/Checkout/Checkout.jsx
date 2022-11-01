import { product1_0 } from '~/assets/images';
import Button from '~/components/Button';
import QuantityChange from '~/components/Button/QuantityChange';

export default function Checkout() {
    return (
        <div className="my-container py-10">
            <h2 className="text-xl text-primary text-center font-semibold">Your order (3 items)</h2>
            <div className="w-full max-w-[500px] mx-auto divide-y">
                <div className="grid grid-cols-3 gap-2 py-4">
                    <div className="aspect-square my-auto">
                        <img src={product1_0} alt="product" className="w-full h-full object-contain" />
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                        <h3 className="line-clamp-2 text-sm font-medium capitalize lg:text-base">
                            Product 1 With Long Long Name
                        </h3>
                        <div className="text-xs text-slate-500 ml-2 empty:hidden"></div>
                        <div className="flex items-center justify-between flex-wrap sm:mt-2">
                            <p className="text-sm text-primary font-medium w-full my-2 sm:w-auto">
                                3,000,000<sup>đ</sup>
                            </p>
                            <QuantityChange
                                value={1}
                                onIncrease={() => {}}
                                onDecrease={() => {}}
                                className="flex-row-reverse [&>button]:h-6 [&>button]:px-4 justify-end gap-2"
                            />
                            <Button className="h-6" outline>
                                <span className="material-symbols-outlined text-base">delete</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 py-4">
                    <div className="aspect-square my-auto">
                        <img src={product1_0} alt="product" className="w-full h-full object-contain" />
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                        <h3 className="line-clamp-2 text-sm font-medium capitalize lg:text-base">
                            Product 1 With Long Long Name
                        </h3>
                        <div className="text-xs text-slate-500 ml-2 empty:hidden">
                            <p>Rosa - White/Mesh/36 </p>
                            <p>Pink Leather Straps - Rose Gold/18</p>
                        </div>
                        <div className="flex items-center justify-between flex-wrap sm:mt-2">
                            <p className="text-sm text-primary font-medium w-full my-2 sm:w-auto">
                                3,000,000<sup>đ</sup>
                            </p>
                            <QuantityChange
                                value={1}
                                onIncrease={() => {}}
                                onDecrease={() => {}}
                                className="flex-row-reverse [&>button]:h-6 [&>button]:px-4 justify-end gap-2"
                            />
                            <Button className="h-6" outline>
                                <span className="material-symbols-outlined text-base">delete</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
