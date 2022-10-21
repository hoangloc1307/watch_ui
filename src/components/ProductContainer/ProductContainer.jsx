import ProductCard from '../ProductCard';

const ProductContainer = ({ title, description, products, scroll }) => (
    <div className="my-4 my-container bg-white py-4">
        <h2 className="font-dancing-script text-3xl text-primary text-center">{title}</h2>
        <p className="my-2 text-xs">{description}</p>
        <div className={scroll && 'my-container-item-full'}>
            <div className={`flex ${scroll ? 'w-max' : 'w-full flex-wrap'} items-center`}>
                {products.map((product, index) => (
                    <div key={index} className={`w-1/2 ${scroll ? 'p-3' : 'p-1'} md:w-1/3`}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProductContainer;
