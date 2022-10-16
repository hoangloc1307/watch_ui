/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            spacing: {
                'my-navigation-height': 'var(--navigation-height)',
            },
        },
    },
    plugins: [],
};
