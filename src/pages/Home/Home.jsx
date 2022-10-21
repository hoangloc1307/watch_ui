import { product22, product33 } from '../../assets/images';
import { hero } from '../../assets/videos';
import ProductContainer from '../../components/ProductContainer';

const Home = () => {
    return (
        <>
            <video
                src={hero}
                type="video/mp4"
                autoPlay={true}
                loop
                muted
                className="aspect-video object-cover w-full max-h-screen"
            />
            <ProductContainer
                title={'Selling Products'}
                products={[
                    { image: product22, name: 'Cart Item 2 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 3 With Name', price: 3100000, amount: 3 },
                    { image: product22, name: 'Cart Item 5 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 6 With Name', price: 3100000, amount: 3 },
                ]}
                scroll
            />
            <div className="min-h-screen bg-red-400"></div>
        </>
    );
};

export default Home;
