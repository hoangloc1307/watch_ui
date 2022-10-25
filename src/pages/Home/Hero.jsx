import { useState } from 'react';

import { dyoss, hero } from '~/assets/videos';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(!showVideo);
        document.body.style.overflow = showVideo ? 'unset' : 'hidden';
    };

    return (
        <div className="-mt-10 lg:-mt-[157px]">
            <div className="relative">
                {/* Video hero */}
                <video
                    src={hero}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    className={`object-cover w-full max-h-[600px]`}
                />
                {/* Video detail */}
                {showVideo && (
                    <video
                        src={dyoss}
                        type="video/mp4"
                        autoPlay
                        controls
                        className="fixed left-1/2 top-1/2 max-h-[50vh] -translate-y-1/2 -translate-x-1/2 aspect-video z-50"
                    ></video>
                )}
                {/* Overlay */}
                <span
                    className={`inset-0 bg-black ${showVideo ? 'fixed z-40' : 'absolute bg-opacity-30'} `}
                    onClick={showVideo ? handleShowVideo : null}
                ></span>
                {/* View video button */}
                <span
                    className="material-symbols-outlined absolute bottom-2 right-2 z-[1] text-white p-2 cursor-pointer"
                    onClick={handleShowVideo}
                >
                    play_arrow
                </span>
                {/* Hero content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-container w-full text-left text-white">
                    <h1 className="font-bold text-xl uppercase font-poppins md:text-4xl">Dyoss Watch</h1>
                    <p className="text-xl font-poppins font-extralight md:text-3xl md:mt-6">
                        Simplicity is always trendy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
