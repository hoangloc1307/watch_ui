import { banner1, icon1, icon2, icon3, product22, product33 } from '~/assets/images';
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
            <div className="flex items-center my-container my-10">
                <div className="w-full md:w-1/2 md:pr-2">
                    <h2 className="font-dancing-script text-3xl text-primary text-center md:text-4xl">
                        About Dyoss Watch
                    </h2>
                    <p className="my-6 text-sm text-center mx-auto max-w-[500px] md:text-base">
                        Dyoss' latest masterpiece with its luxurious, minimalistic, modern design has made many
                        fashionistas super happy. It's more surprising that it can be combined with any fashion style
                        you love.
                    </p>
                    <div className="grid grid-cols-3 my-6">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <img src={icon1} alt="Icon 1" className="h-[50px]" />
                            <span className="capitalize text-xs md:text-sm">scratch resistant sapphire glass</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <img src={icon2} alt="Icon 2" className="h-[50px]" />
                            <span className="capitalize text-xs md:text-sm">5ATM water resistant</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <img src={icon3} alt="Icon 3" className="h-[50px]" />
                            <span className="capitalize text-xs md:text-sm">Miyota machine from Japan</span>
                        </div>
                    </div>
                    <button className="bg-primary text-white text-center py-2 rounded-xl my-4 block w-[200px] m-auto">
                        More information...
                    </button>
                </div>
                <div className="hidden self-stretch md:block md:w-1/2 md:pl-2">
                    <img src={banner1} alt="Banner 1" className="block max-h-[500px] object-cover w-full h-full" />
                </div>
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
