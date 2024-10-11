'use server';
import '@/styles/pages/home.css';
import '@fontsource/krona-one';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';


// Define the metadata for the page
export async function generateMetadata(): Promise<Metadata> {
    // Fetch product data to generate metadata
    return {
        title: 'Home',
    };
}

// Home page component
export default async function Home() {
    return (
        <>
            <Box
                sx={{
                    // mr: 5,
                    // ml: 5,
                    mt: -15,
                    mb: -20,
                    scale: 1,
                    borderRadius: '24px',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: 'Krona One',
                        opacity: 0.9,
                    }}
                    className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text"
                >
                    Halo Outer Space Travel
                </Typography>
            </Box>
        </>
    );
}
