import { banner1, product1_0, product2_0, product3_0, product4_0, product5_0 } from '~/assets/images';
import Button from '~/components/Button';
import ProductContainer from '~/components/ProductContainer';
import Hero from './Hero';

const Home = () => {
    console.log('Home');
    return (
        <>
            {/* Hero */}
            <Hero />

            {/* Selling products */}
            <ProductContainer
                title={'Selling Products'}
                products={[
                    { image: product1_0, name: 'Cart Item 1 With Long Name', price: 3100000, amount: 1 },
                    { image: product2_0, name: 'Cart Item 2 Short Name ', price: 2990000, amount: 12 },
                    { image: product3_0, name: 'Cart Item 3 ', price: 2890000, amount: 4 },
                    { image: product4_0, name: 'Cart Item 4 With Long Long Long Name', price: 3200000, amount: 6 },
                    { image: product5_0, name: 'Cart Item 5 With Name', price: 3000000, amount: 2 },
                ]}
            />

            {/* About Dyoss */}
            <div className="my-container py-20 relative text-white text-center">
                <h2 className="font-dancing-script text-3xl text-primary text-center capitalize tracking-wider font-semibold md:text-4xl">
                    About Dyoss Watch
                </h2>
                <p className="text-sm my-6 mx-auto font-light max-w-[500px] md:text-base">
                    Dyoss' latest masterpiece with its luxurious, minimalistic, modern design has made many fashionistas
                    super happy. It's more surprising that it can be combined with any fashion style you love.
                </p>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-5xl">watch_off</span>
                        <span className="capitalize text-xs md:text-sm">scratch resistant sapphire glass</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-5xl">format_color_reset</span>
                        <span className="capitalize text-xs md:text-sm">5ATM water resistant</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-5xl">settings_suggest</span>
                        <span className="capitalize text-xs md:text-sm">Miyota machine from Japan</span>
                    </div>
                </div>
                <Button icon="info" background className="mt-10">
                    More Information
                </Button>
                <span className="absolute inset-0 bg-black bg-opacity-70 z-[-1]"></span>
                <img src={banner1} alt="Banner 1" className="absolute top-0 left-0 z-[-2] object-cover w-full h-full" />
            </div>

            {/* Man's watches */}
            <ProductContainer
                title={"man's watches"}
                products={[
                    { image: product1_0, name: 'Cart Item 1 With Long Name', price: 3100000, amount: 1 },
                    { image: product2_0, name: 'Cart Item 2 Short Name ', price: 2990000, amount: 12 },
                    { image: product3_0, name: 'Cart Item 3 ', price: 2890000, amount: 4 },
                    { image: product4_0, name: 'Cart Item 4 With Long Long Long Name', price: 3200000, amount: 6 },
                    { image: product5_0, name: 'Cart Item 5 With Name', price: 3000000, amount: 2 },
                ]}
            />

            {/* Woman's watches */}
            <ProductContainer
                title={"woman's watches"}
                products={[
                    { image: product1_0, name: 'Cart Item 1 With Long Name', price: 3100000, amount: 1 },
                    { image: product2_0, name: 'Cart Item 2 Short Name ', price: 2990000, amount: 12 },
                    { image: product3_0, name: 'Cart Item 3 ', price: 2890000, amount: 4 },
                    { image: product4_0, name: 'Cart Item 4 With Long Long Long Name', price: 3200000, amount: 6 },
                    { image: product5_0, name: 'Cart Item 5 With Name', price: 3000000, amount: 2 },
                ]}
            />
        </>
    );
};

export default Home;
