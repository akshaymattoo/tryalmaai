import { Image } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter();

    return (
        <>
            <Box position="relative" width="100%">
                <img src="/assessment_header.jpg" alt="Description of image" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                {/* <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="black" textAlign="left">
                    <Typography fontSize='5xl' fontWeight="bold">Get an assessment</Typography>
                    <Typography fontSize='5xl' fontWeight="bold">of your immigration case</Typography>
                </Box> */}
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" minHeight="10vh" width={'90%'}>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" >
                    <img src="/file-info.png" alt="Description of image" />
                    <Typography fontSize='4xl' fontWeight={'bold'}>Thank You</Typography>
                    <Typography fontSize='2xl' fontWeight={'bold'} width={'60%'} mb={10}>Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.</Typography>

                    <Button sx={{ backgroundColor: "black", color: 'white', borderRadius: '50', width: '30%' }}
                        onClick={() => router.push('/')}>Go Back to Homepage</Button>
                </Box>
            </Box >
        </>
    )
}

export default index
