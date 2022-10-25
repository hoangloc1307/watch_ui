import { banner1, product22, product33 } from '~/assets/images';
import ProductContainer from '~/components/ProductContainer';
import Hero from './Hero';

const Home = () => {
    return (
        <>
            {/* Hero */}
            <Hero />

            {/* Selling products */}
            <ProductContainer
                title={'Selling Products'}
                products={[
                    { image: product22, name: 'Cart Item 2 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 3 With Name', price: 3100000, amount: 3 },
                    { image: product22, name: 'Cart Item 5 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 6 With Name', price: 3100000, amount: 3 },
                ]}
            />

            {/* About Dyoss */}
            <div className="my-container py-20 relative text-white">
                <h2 className="font-dancing-script text-3xl text-primary text-center md:text-4xl">About Dyoss Watch</h2>
                <p className="mt-6 text-sm text-center mx-auto max-w-[500px] md:text-base">
                    Dyoss' latest masterpiece with its luxurious, minimalistic, modern design has made many fashionistas
                    super happy. It's more surprising that it can be combined with any fashion style you love.
                </p>
                <div className="grid grid-cols-3 mt-6">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <span className="material-symbols-outlined text-5xl">watch_off</span>
                        <span className="capitalize text-xs md:text-sm">scratch resistant sapphire glass</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <span className="material-symbols-outlined text-5xl">format_color_reset</span>
                        <span className="capitalize text-xs md:text-sm">5ATM water resistant</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <span className="material-symbols-outlined text-5xl">settings_suggest</span>
                        <span className="capitalize text-xs md:text-sm">Miyota machine from Japan</span>
                    </div>
                </div>
                <button className="bg-primary bg-opacity-80 text-white text-center py-2 rounded-xl mt-10 block w-[200px] m-auto hover:bg-opacity-100">
                    More information...
                </button>
                <span className="absolute inset-0 bg-black bg-opacity-70 z-[-1]"></span>
                <img src={banner1} alt="Banner 1" className="absolute top-0 left-0 z-[-2] object-cover w-full h-full" />
            </div>

            {/* Man's watches */}
            <ProductContainer
                title={"man's watches"}
                products={[
                    { image: product22, name: 'Cart Item 2 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 3 With Name', price: 3100000, amount: 3 },
                    { image: product22, name: 'Cart Item 5 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 6 With Name', price: 3100000, amount: 3 },
                ]}
            />

            {/* Woman's watches */}
            <ProductContainer
                title={"woman's watches"}
                products={[
                    { image: product22, name: 'Cart Item 2 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 3 With Name', price: 3100000, amount: 3 },
                    { image: product22, name: 'Cart Item 5 With Long Name', price: 3100000, amount: 12 },
                    { image: product33, name: 'Cart Item 6 With Name', price: 3100000, amount: 3 },
                ]}
            />
        </>
    );
};

export default Home;
