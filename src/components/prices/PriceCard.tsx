'use client';

import { Box, Button, Paper, SxProps, Typography } from '@mui/material';

interface PriceCardProps {
    data: PriceData;
    sx?: SxProps;
    BuyButton?: boolean;
}

export default function PriceCard({ data, sx, BuyButton=true }: PriceCardProps) {
    let price: number;
    if (data.metadata?.sale) {
        console.log(data.metadata.sale);
        const percentage = data.metadata.sale / 100;
        const change = data.price * percentage;
        price = data.price - change;
        console.log(price);
    } else price = data.price;
    return (
        <Paper
            id={data.name}
            elevation={2}
            variant="elevation"
            // square={false}
            sx={sx ?? {
                backgroundColor: 'rgb(31, 31, 31, 0.5)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255, 0.1)',
                padding: 2,
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
            }}
        >
            <Box
                component={'img'}
                width={800}
                height={400}
                src={data.image}
                sx={{
                    borderRadius: '24px',
                    flexShrink: 0,
                    width: '40%',
                    maxHeight: '400px',
                    height: 'auto',
                    marginRight: 2,
                    ml: 0,
                    border: 0.1,
                    borderColor: '4px solid rgba(255,255,255, 1)',
                    filter: 'blur(4px)',
                    transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out, border 0.15s ease-in-out', // Smooth transition

                }}
                className="pricing-image"
            />
            <Box
                sx={{
                    pl: 1.25,
                    // flex: 1,
                    transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out, border 0.15s ease-in-out', // Smooth transition
                }}
                className="pricing-text">
                <Typography variant="h4" gutterBottom color="white" sx={{}}>
                    {data.name}
                </Typography>
                <Typography variant="body1" color="white" component="h6" sx={{ marginBottom: 2 }}>

                        {data.description}
                </Typography>
                    <Button
                    color="success"
                    variant="contained"
                    sx={{
                        display: BuyButton ? '' : 'none',
                    }}
                        href={`/checkout/${data.id.toLowerCase()}`}>
                        Buy now for {
                            new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                                price,
                            )
                        }
                    </Button>
            </Box>
        </Paper>
    );
}