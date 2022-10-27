import ProductCard from '../ProductCard';

const ProductContainer = ({ title, description, products }) => (
    <div className="my-10 my-container bg-white py-4">
        <h2 className="font-dancing-script text-3xl text-primary text-center capitalize tracking-wider font-semibold md:text-4xl">
            {title}
        </h2>
        <p className="py-2 text-xs text-center empty:hidden">{description}</p>
        <div className="my-container-full">
            <div className="flex w-max items-center lg:w-full lg:grid lg:grid-cols-5">
                {products.map((product, index) => (
                    <div key={index} className="w-1/2 p-3 lg:w-full">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProductContainer;
