/* ----------------------------------- CSS ---------------------------------- */
import '@/styles/globals.css';
/* ---------------------------------- Fonts --------------------------------- */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/titan-one';

import { Box, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Metadata } from 'next';
/* --------------------------------- Imports -------------------------------- */
import * as React from 'react';

import theme from '@/common/mui/theme/theme';
// import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

// import NextAuthProvider from './context/SessionContext';

export const metadata: Metadata = {
    generator: 'Halo Outer Space Travel',
    applicationName: 'Halo Outer Space Travel Website',
    referrer: 'origin-when-cross-origin',
    keywords: ['space', 'neptune', 'science', 'astronomy', 'travel', 'cheap', 'affordable', 'safe'],
    openGraph: {
        url: 'https://inertia.lighting',
        siteName: 'Halo Outer Space Travel | %s',
        // images: inertia_logo.src,
    },
    title: {
        template: 'Halo Outer Space Travel | %s',
        default: 'Halo Outer Space Travel',
    },
    description: 'Welcome to Halo Outer Space Travel.',
    appleWebApp: {
        capable: true,
        // startupImage: inertia_logo.src,
        title: 'Halo Outer Space Travel',
        statusBarStyle: 'black-translucent',
    },
    // manifest: "/manifest.json",
    creator: 'Halo Outer Space Travel',
    // icons: inertia_logo.src,
    // twitter: {
    //     site: 'https://inertia.lighting',
    //     title: 'Halo Outer Space Travel',
    //     images: inertia_logo.src,
    // },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const MainContent = () => (
        <Box
            sx={{
                mr: 5,
                ml: 5,
                mt: 15,
                mb: 20,
                paddingTop: '64px',
            }}
        >
            {children}
        </Box>
    );

    return (
        <html>
            <body>
                <script src="/js/registerServiceWorker.js" />
                <AppRouterCacheProvider
                    options={{ key: 'css' }}
                >
                    <ThemeProvider theme={theme}>
                        <Header />
                        <MainContent />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
            {/* <Footer /> */}
        </html>
    );
}