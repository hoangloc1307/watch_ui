import Button from '~/components/Button';
import ProductSlider from './ProductSlider';

export default function ProductDetail() {
    return (
        <div className="my-container pb-10 md:flex md:gap-[5%]">
            {/* Image slider */}
            <div className="md:w-[45%]">
                <ProductSlider />
            </div>
            {/* Content */}
            <div className="mt-5 md:w-1/2">
                {/* Name & price */}
                <div>
                    <h2 className="capitalize text-lg font-medium">Product Name So Long</h2>
                    <p className="text-primary font-medium">
                        3,000,000<sup>đ</sup>
                    </p>
                    <Button icon="add_shopping_cart" background className="w-full mt-2 md:w-[150px]">
                        Add to cart
                    </Button>
                </div>
                {/* Description */}
                <h3 className="mt-10 mb-2 border-b border-primary text-primary text-sm md:text-base">About</h3>
                <p className="text-xs leading-5 md:text-sm">
                    The extremely eye-catching product has just been "launched" of Dyoss summer 2019. With a completely
                    new design, eliminating redundant details, bringing the design trend of "infinity". It is a symbol
                    of simplicity and timeless modernity. The sleekness of the design, as well as the charm that the
                    watch possesses, will make you feel satisfied when you have this accessory on your wrist.
                </p>
                {/* Features */}
                <h3 className="mt-10 mb-2 border-b border-primary text-primary text-sm md:text-base">Features</h3>
                <ul className="text-xs list-disc list-inside md:text-sm">
                    <li className="mt-0.5">Diameter 40mm - for Men.</li>
                    <li className="mt-0.5">Japan Miyota Quartz Movement.</li>
                    <li className="mt-0.5">High quality scratch resistant sapphire crystal.</li>
                    <li className="mt-0.5">5ATM water resistant (wearable while swimming - not recommended).</li>
                    <li className="mt-0.5">Stainless steel watch case and buckle.</li>
                    <li className="mt-0.5">Imported steel wire, stainless, powder coated - size 20mm.</li>
                    <li className="mt-0.5">1 year warranty for the device and free battery replacement.</li>
                </ul>
            </div>
        </div>
    );
}
