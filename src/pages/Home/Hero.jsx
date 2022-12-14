import { useState } from 'react';

import { dyoss, hero } from '~/assets/videos';
import Button from '~/components/Button';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(!showVideo);
        document.body.style.overflow = showVideo ? 'unset' : 'hidden';
    };

    return (
        <div className="relative">
            {/* Video hero */}
            <video
                src={hero}
                type="video/mp4"
                autoPlay
                loop
                muted
                className={`aspect-square object-cover w-full max-h-[clamp(500px,90vh,850px)] md:aspect-video`}
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
            <div className="absolute bottom-0 right-0 text-white">
                <Button icon="play_arrow" onClick={handleShowVideo} />
            </div>
            {/* Hero content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-container w-full text-center text-white">
                <h1 className="font-bold text-4xl uppercase md:text-4xl">Dyoss</h1>
                <p className="text-xl font-light md:text-3xl md:mt-6">Simplicity is always trendy</p>
            </div>
        </div>
    );
};

export default Hero;
