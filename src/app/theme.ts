// src/theme.ts
'use client';
import { Noto_Sans_JP } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const notosans = Noto_Sans_JP({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: notosans.style.fontFamily,
    },
});

export default theme;