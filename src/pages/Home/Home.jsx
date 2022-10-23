import { useState } from 'react';
import { product22, product33 } from '../../assets/images';
import { dyoss, hero } from '../../assets/videos';
import ProductContainer from '../../components/ProductContainer';

const Home = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(!showVideo);
        document.body.style.overflow = showVideo ? 'unset' : 'hidden';
    };

    return (
        <>
            {/* Hero */}
            <div className="relative">
                <video
                    src={hero}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    className={`object-cover w-full max-h-screen aspect-square`}
                />
                {showVideo && (
                    <video
                        src={dyoss}
                        type="video/mp4"
                        autoPlay
                        controls
                        className="fixed left-0 top-1/2 -translate-y-1/2 aspect-video z-50"
                    ></video>
                )}
                <span
                    className={`inset-0 bg-black ${showVideo ? 'fixed z-40' : 'absolute bg-opacity-70'} `}
                    onClick={showVideo ? handleShowVideo : null}
                ></span>
                <span
                    className="material-symbols-outlined absolute bottom-2 right-2 z-10 text-white p-2"
                    onClick={handleShowVideo}
                >
                    play_arrow
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-white">
                    <h1 className="font-extrabold text-2xl tracking-widest uppercase">Dyoss Watch</h1>
                    <p className="tracking-wider mt-4 text-xl italic">Simplicity is always trendy.</p>
                </div>
            </div>

            {/* Selling products */}
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
        </>
    );
};

export default Home;
