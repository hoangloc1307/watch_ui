/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                dark: 'var(--color-black)',
            },
            spacing: {
                'my-navigation-height': 'var(--navigation-height)',
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
