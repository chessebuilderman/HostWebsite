import { Box, Typography } from '@mui/material';

interface PageProps {
    message?: string;
}

export default function NotFound({ message }: PageProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centers content vertically
                alignItems: 'center', // Centers content horizontally
                minHeight: '100vh', // Ensures the Box takes at least the full height of the viewport
                textAlign: 'center', // Centers text horizontally within the Box
                mr: -5,
                ml: -5,
                mt: -25,
            }}
        >
            <Box
                sx={{
                    width: '50%', // Control the width of the content
                }}
            >
                <Typography variant="h3" gutterBottom>
                    404
                </Typography>
                <Typography variant="body1" sx={{ p: 1 }} fontSize={25}>
                    {message ?? 'Page not found'}
                </Typography>
            </Box>
        </Box>
    );
}
