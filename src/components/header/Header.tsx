'use client';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

// import { SignInButton, SignOutButton } from '../auth/buttons/HeaderAuth';
// import User from '../user/UserBadge';
import { HeaderLinks } from './HeaderLinks';

export default function HeaderClient() {
    const [isSticky, setIsSticky] = useState(false);
    // let buttons;
    // if (logged_in) {
    //     buttons = (
    //         <>
    //             <User session={session} />
    //             <SignOutButton />
    //         </>
    //     );
    // } else {
    //     buttons = <SignInButton />;
    // }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                display: 'flex',
                mx: 30,
                mt: isSticky ? 2 : 5,
                alignContent: 'center',
                textAlign: 'center',
                justifyContent: 'space-evenly',
                backdropFilter: 'blur(50px)',
                opacity: 1,
                position: isSticky ? 'fixed' : 'relative',
                top: isSticky ? 0 : 'auto',
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'top 0.5s ease, margin-top 0.3s ease',
            }}
        // className="backdrop-blur-xl"
        >
            <HeaderLinks />
            {/* <SearchComponent defaultValue={null} /> */}
            {/* {buttons} */}
        </Box>
    );
}
