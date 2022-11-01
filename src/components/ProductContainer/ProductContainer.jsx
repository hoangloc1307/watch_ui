import ProductCard from '../ProductCard';

const ProductContainer = ({ title, description, products }) => (
    <div className="my-10">
        <h2 className="font-dancing-script text-3xl text-primary text-center capitalize tracking-wider font-semibold empty:hidden md:text-4xl">
            {title}
        </h2>
        <p className="py-2 text-xs text-center empty:hidden">{description}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {products.map((product, index) => (
                <div key={index} className="p-2">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    </div>
);

export default ProductContainer;
