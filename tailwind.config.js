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
            },
            transitionProperty: {
                height: 'height',
            },
            spacing: {
                'my-navigation-height': 'var(--navigation-height)',
                'my-cart-item-height': 'calc(100vh - 136px - var(--navigation-height))',
            },
        },
    },
    plugins: [],
};
