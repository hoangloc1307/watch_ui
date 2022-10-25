import ProductCard from '../ProductCard';

const ProductContainer = ({ title, description, products }) => (
    <div className="my-10 my-container bg-white py-4">
        <h2 className="font-dancing-script text-3xl text-primary text-center capitalize md:text-4xl">{title}</h2>
        {description && <p className="py-2 text-xs">{description}</p>}
        <div className="my-container-full">
            <div className="flex w-max items-center md:flex-wrap md:w-full">
                {products.map((product, index) => (
                    <div key={index} className="w-1/2 p-3 md:w-1/4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProductContainer;
