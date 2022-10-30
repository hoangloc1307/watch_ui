/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                'primary-active': 'rgb(var(--color-primary-active) / <alpha-value>)',
                dark: 'rgb(var(--color-dark) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
                'dancing-script': ['Dancing Script', 'cursive'],
            },
            transitionProperty: {
                height: 'height',
            },
            spacing: {
                'my-navigation-height': 'var(--navigation-height)',
                'my-cart-item-height-show': 'calc(100vh - 136px - var(--navigation-height))',
                'my-cart-item-height-hide': 'calc(100vh - 136px)',
                'my-sceen': 'calc(100vw - var(--scrollbar-width))',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-aria-attributes')],
};
