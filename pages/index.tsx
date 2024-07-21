import Head from "next/head";
import { useRouter } from 'next/router'
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'black',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'black',
  },

});
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
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', backgroundColor: '#D9DEA5' }}>
        <Stack spacing={3} textAlign="center" width="75%">
          <Typography fontSize='6xl' width="100%">Immigration made easy!</Typography>
          <Typography fontSize='2xl' width="65%" mx="auto">Alma simplifies immigration for technologists, founders, and researchers with our top legal talent and user-friendly platform.</Typography>
          {/* <Button variant="contained" color="black"
            _hover={{ bg: "gray.700" }}
            borderRadius="50" width="30%" mx="auto" onClick={() => router.push('/assesment')}>Start assessment of your case!</Button> */}

          <BootstrapButton variant="contained" disableRipple onClick={() => router.push('/assesment')}>
            Start assessment of your case!
          </BootstrapButton>
        </Stack>
      </Box>
    </>
  );
}
