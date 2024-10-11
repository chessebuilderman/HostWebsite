'use client';

import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Button, SxProps, Typography } from '@mui/material';

export function HeaderLinks() {
    const textSettings: SxProps = {
        flexGrow: 1,
        padding: 1,
        fontWeight: 600,
        letterSpacing: 3,
         };
    return (
        <>
            <Button color="inherit" href="/">
                <HomeIcon />
                <Typography variant="subtitle1" sx={textSettings} align="left">
                    Home
                </Typography>
            </Button>
            <Button color="inherit" href="/about">
                <BookIcon />
                <Typography variant="subtitle1" sx={textSettings} align="left">
                    About
                </Typography>
            </Button>
            <Button color="inherit" href="/pricing">
                <PaymentsIcon />
                <Typography variant="subtitle1" sx={textSettings} align="left">
                    Pricing
                </Typography>
            </Button>
        </>
    );
}