import Head from "next/head";
import { useRouter } from 'next/router'
import { Box, Button, Stack, Typography } from "@mui/material";


export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Alma</title>
        <meta name="description" content="Alma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ widht: '100%', minHeight: '100vh', backgroundColor: '#D9DEA5' }}>

        <Typography fontSize={32} width="40%">Immigration made easy!</Typography>
        <Typography fontSize={16} width="40%" mx="auto">Alma simplifies immigration for technologists, founders, and researchers with our top legal talent and user-friendly platform.</Typography>

        <Button sx={{ width: '40%', color: 'white', backgroundColor: 'black' }} variant="contained" disableRipple onClick={() => router.push('/assesment')}>
          Start assessment of your case!
        </Button>

      </Box>
    </>
  );
}
