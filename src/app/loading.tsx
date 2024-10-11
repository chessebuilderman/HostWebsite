import { CircularProgress } from '@mui/material';

export default function Loading() {

    return <CircularProgress sx={{
        justifySelf: 'center',
        alignSelf: 'center',
    }} />;
}