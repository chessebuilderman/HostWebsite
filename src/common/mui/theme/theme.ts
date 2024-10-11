'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Krona One',
            'Roboto',
        ].join(','),
    },
    palette: {
        mode: 'dark',
    },
    components: {
        MuiTextField: {
            defaultProps: {
                sx: {
                    color: 'white',
                    fontFamily: 'Roboto',
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                color: 'white',
                fontFamily: 'Roboto',
                // fontWeight: '400',
            },
        },
        MuiSvgIcon: {
            defaultProps: {
                sx: {
                    color: 'white',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'hsl(0, 0%, 12%)',
                    color: 'hsl(0, 0%, 12%)',
                    opacity: 0.9,
                },
            },
            defaultProps: {
                sx: {
                    backgroundColor: 'hsl(0, 0%, 12%)',
                    color: 'hsl(0, 0%, 12%)',
                    backdropFilter: 'blur(10px);',
                },
            },
        },
        MuiButton: {
            defaultProps: {
                sx: {
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                },
            },
        },
    },
});

export default theme;