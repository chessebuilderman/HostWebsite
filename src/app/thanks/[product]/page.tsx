'use server';

import { Box, Paper, Typography } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProduct } from '@/common/data/prices';

export async function generateMetadata({ params }: { params: { product: string } }): Promise<Metadata> {
    // Fetch product data to generate metadata
    const productData = await getProduct(params.product.toLowerCase());
    if (!productData) {
        return {
            title: 'Product Not Found',
            description: 'Product Not Found',
            openGraph: {
                title: 'Product Not Found',
                description: 'Product Not Found',
            },
        };
    }
    return {
        title: productData ? productData.name : 'Product Not Found',
        description: productData ? productData.description : 'Product Not Found',
        icons: {
            apple: productData.image,
            icon: productData.image,
        },
        twitter: {
            card: 'summary',
            title: productData ? productData.name : 'Product Not Found',
            description: productData ? productData.description : 'Product Not Found',
            images: [
                productData.image,
            ],
        },
        openGraph: {
            title: productData ? productData.name : 'Product Not Found',
            description: productData ? productData.description : 'Product Not Found',
            images: [
                productData.image,
            ],
        },
        keywords: [...productData.name],
    };
}

export default async function SingleProductPage({ params }: { params: { product: string } }) {
    // Fetch product data
    const productData = await getProduct(params.product.toLowerCase());

    if (!productData) {
        notFound();
    }

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <Box sx={{
                    m: 5,
                }}>

            <Typography
                variant="h1"
                sx={{
                    mb: 5,
                }}
            >
                Thank you
            </Typography>
            <Typography
                variant="h2">
                You will receive your "{productData.name} Travel Package" in 2349.
            </Typography>
                </Box>
        </Paper>
    );
}
