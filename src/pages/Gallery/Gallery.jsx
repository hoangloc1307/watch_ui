import {
    gallery_1,
    gallery_10,
    gallery_11,
    gallery_12,
    gallery_13,
    gallery_14,
    gallery_15,
    gallery_16,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
} from '~/assets/images';

export default function Gallery() {
    const handleImageSize = e => {
        const height = e.target.naturalHeight;
        const width = e.target.naturalWidth;

        if (height > width * 1.5) {
            e.target.classList.add('row-span-2');
        } else if (width > height * 1.5) {
            e.target.classList.add('col-span-2');
        }
    };

    return (
        <div className="p-2.5 gap-2.5 grid grid-cols-2 grid-flow-dense auto-rows-max md:grid-cols-3 lg:grid-cols-4">
            {[
                gallery_1,
                gallery_2,
                gallery_3,
                gallery_4,
                gallery_5,
                gallery_6,
                gallery_7,
                gallery_8,
                gallery_9,
                gallery_10,
                gallery_11,
                gallery_12,
                gallery_13,
                gallery_14,
                gallery_15,
                gallery_16,
            ].map(item => (
                <img
                    key={item}
                    src={item}
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    onLoad={handleImageSize}
                />
            ))}
        </div>
    );
}
