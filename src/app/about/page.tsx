'use server';
import '@/styles/pages/about.css';

import { Box, Paper, Typography } from '@mui/material';
import { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {
    // Fetch product data to generate metadata
    return {
        title: 'About Us',
        description: 'Who are we',
    };
}
export default async function AboutPage() {
    return (
        <Paper
            elevation={1}
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                // opacity: 1,
            }}>
            <Box
                sx={{
                    // width: '100%',
                    p: '2%',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    px: 13,
                    borderRadius: '24px',
                    backdropFilter: 'blur(4px)',
                    opacity: 1,

                }}
            >

                <Box component="div" sx={{
                    textSizeAdjust: 'auto',
                }}>

                    <Typography
                        variant="h3"
                        gutterBottom
                        textAlign="center" sx={{
                            fontFamily: 'Krona One',
                        }}>
                        Our History
                    </Typography>
                    {/* <Typography variant="body1" fontSize={25} paragraph>
                        What is now known as Inertia Lighting; was once a small community known as C-Tech Lighting: established by Drawn & Alex, with 150 members in January of 2020.
                    </Typography>
                    <Typography variant="body1" fontSize={25} paragraph>
                        Since then, Inertia has undergone many changes in management and has exceeded all community growth expectations.
                    </Typography>
                    <Typography variant="body1" fontSize={25} paragraph>
                        Now led by Ross, Toto, and MidSpike, Inertia is working to provide quality Roblox stage lighting for developers.
                    </Typography> */}

                    <Typography
                        variant="body1"
                        fontSize={25}
                        // className="text-blue-700 text-4xl"
                        component="p"
                        className="text-cool-orange"
                        sx={{
                            fontSize: 25,
                            whiteSpace: 'pre-line',
                        }}
                    >
We are a world-renowned travel agency specializing in incredible, thrill-seeking excursions to Neptune.
Since our beloved blue planet is so cold, make sure to pack warm! You don’t want to miss out on such  activities like skiing on high mountain peaks, or ice skating across massive frozen lakes, and we can’t forget about the ice sledding, its quality fun for the whole family. Especially the snowball fights for your little ones. If none of that interests you, do not fear! We offer beautiful scenic hot air balloon trips, over the gorgeous ice mountains and frozen landscapes. Our resorts are known from all over, including spas, heated pools, lounges and several production halls, such as even enrapturing opera performances. Why wait? You could book today for the upcoming meteor season, we guarantee you’ll see the most wondrous cosmic events. A true once in a lifetime opportunity.

                    </Typography>
                </Box>
                <Box sx={{
                    mt: '10%',
                }}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        textAlign="center"
                        className=""
                    >
                        Legal Information
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={25}
                        sx={{
                            p: 0,
                            // color: '#FF6B39',
                            whiteSpace: 'pre-line',
                        }}>
                        For information regarding your privacy and our policies; click on the button below.
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
