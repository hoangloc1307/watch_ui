import Button from '~/components/Button';
import ProductSlider from './ProductSlider';

export default function ProductDetail() {
    return (
        <div className="my-container pb-10">
            {/* Image slider */}
            <ProductSlider />
            {/* Content */}
            <div className="mt-5">
                <h2 className="capitalize text-lg font-medium">Product Name So Long</h2>
                <p className="text-primary font-medium">
                    3,000,000<sup>đ</sup>
                </p>
                <Button icon="add_shopping_cart" background className="w-full mt-2">
                    Add to cart
                </Button>
                <h3 className="mt-10 mb-2 border-b border-primary text-primary text-sm">About</h3>
                <p className="text-xs leading-5">
                    The extremely eye-catching product has just been "launched" of Dyoss summer 2019. With a completely
                    new design, eliminating redundant details, bringing the design trend of "infinity". It is a symbol
                    of simplicity and timeless modernity. The sleekness of the design, as well as the charm that the
                    watch possesses, will make you feel satisfied when you have this accessory on your wrist.
                </p>
                <h3 className="mt-10 mb-2 border-b border-primary text-primary text-sm">Features</h3>
                <ul className="text-xs list-disc list-inside">
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
