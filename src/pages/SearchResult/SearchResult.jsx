import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { product1_0, product2_0, product3_0, product4_0, product5_0 } from '~/assets/images';
import ProductContainer from '~/components/ProductContainer';

export default function SearchResult() {
    const location = useLocation();
    const keyword = location.state?.keyword;
    const [displayKeyword, setDisplayKeyword] = useState('');

    useEffect(() => {
        if (keyword) {
            setDisplayKeyword(keyword);
        } else {
            const params = new URLSearchParams(location.search);
            setDisplayKeyword(params.get('keyword'));
        }
    }, [keyword, location.search]);

    return (
        <div className="my-container py-10">
            <h2 className="text-2xl text-primary text-center font-semibold">Search result: "{displayKeyword}"</h2>
            <ProductContainer
                products={[
                    { image: product1_0, name: 'Cart Item 1 With Long Name', price: 3100000, amount: 1 },
                    { image: product2_0, name: 'Cart Item 2 Short Name ', price: 2990000, amount: 12 },
                    { image: product3_0, name: 'Cart Item 3 ', price: 2890000, amount: 4 },
                    { image: product4_0, name: 'Cart Item 4 With Long Long Long Name', price: 3200000, amount: 6 },
                    { image: product5_0, name: 'Cart Item 5 With Name', price: 3000000, amount: 2 },
                ]}
            />
        </div>
    );
}
