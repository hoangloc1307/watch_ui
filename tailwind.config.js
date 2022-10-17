/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#33cccc',
            },
            spacing: {
                'my-navigation-height': 'var(--navigation-height)',
            },
        },
    },
    plugins: [],
};
