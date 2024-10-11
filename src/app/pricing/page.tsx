'use server';

import { Paper, Stack } from '@mui/material';
import { Metadata } from 'next';
import PriceCard from 'src/components/prices/PriceCard';

import { getPriceData } from '@/common/data/prices';

export async function generateMetadata(): Promise<Metadata> {
    // Fetch product data to generate metadata
    return {
        title: 'Pricing',
        description: 'Pricing for trips',
        openGraph: {
            title: 'Partners',
            description: 'Our partners',
        },
    };
}
export default async function PartnersPage() {
    const priceData = await getPriceData();
    return (
        <Paper
        elevation={1}
        variant="elevation"
        square={false}
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                p: 5,
                // width: '100%',
                backdropFilter: 'blur(10px)',

                // opacity: 1,
            }}>
            <Stack
                spacing={4}
                sx={{
                    justifySelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'flex-start',

                }}>
                {priceData.map((item) => (
                    <PriceCard data={item} />
                ))}
            </Stack>
        </Paper>
    );
}