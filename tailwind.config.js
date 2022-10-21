/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                'dancing-script': ['Dancing Script', 'cursive'],
            },
            transitionProperty: {
                height: 'height',
            },
            spacing: {
                'my-navigation-height': 'var(--navigation-height)',
                'my-cart-item-height-show': 'calc(100vh - 136px - var(--navigation-height))',
                'my-cart-item-height-hide': 'calc(100vh - 136px)',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
