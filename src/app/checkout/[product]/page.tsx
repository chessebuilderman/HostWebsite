'use server';

import { Button, Paper, Stack, TextField } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProduct } from '@/common/data/prices';
import PriceCard from '@/components/prices/PriceCard';

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
            }}>
            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    m: 10,
                }}>

                <TextField
                    id="card-number"
                    label="Name"
                    helperText="Name on card"
                    variant="outlined"
                    slotProps={{ htmlInput: { maxLength: 30 } }}
                    sx={{
                        m: 2,
                        color: 'white',
                    }}
                />
                <TextField
                    id="card-number"
                    label="Card Number"
                    helperText="XXXX-XXXX-XXXX-XXXX"
                    variant="outlined"
                    slotProps={{ htmlInput: { maxLength: 16 } }}
                    sx={{
                        m: 2,
                        color: 'white',
                    }}
                />
                <TextField
                    id="card-number"
                    label="Expiration Date"
                    helperText="MM/YY"
                    variant="outlined"
                    slotProps={{ htmlInput: { maxLength: 5 } }}
                    sx={{
                        m: 2,
                        color: 'white',
                    }}
                />
                <TextField
                    id="card-number"
                    label="CVV"
                    helperText="3-4 numbers on back of card"
                    slotProps={{ htmlInput: { maxLength: 4 } }}
                    variant="outlined"
                    sx={{
                        m: 2,
                        color: 'white',
                    }}
                />
            </Stack>
            <PriceCard
                data={productData}
                BuyButton={false}
                sx={{
                    backgroundColor: 'rgb(31, 31, 31, 0.5)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255, 0.1)',
                    m: 5,
                    p: 5,
                    minHeight: '150px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    ':hover': {
                        '.pricing-image': {
                            filter: 'blur(0px)',
                            transform: 'scale(1.01)',
                        },
                        '.pricing-text': {
                            transform: 'scale(1.01)',
                        },
                    },
                }} />
            <Button
                color="success"
                variant="contained"
                href={`/thanks/${productData.id.toLowerCase()}`}
                sx={{
                    px: 10,
                    py: 2,
                    position: 'absolute',
                    bottom: '60px',
                    right: '60px',
                }}
                >
                Pay
            </Button>
        </Paper>
    );
}
