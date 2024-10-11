const config = {
    plugins: {
        'postcss-import': {}, // Ensure this is present
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
        // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
};

export default config;
