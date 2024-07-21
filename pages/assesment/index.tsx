import React from 'react'
import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import jsonSchema from '../../schemas/jsonSchema.json';
import uiSchema from '../../schemas/uiSchema.json';
import { materialRenderers } from '@jsonforms/material-renderers';
import { useRouter } from 'next/router'
import { Box, Button } from '@mui/material';
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
const index = () => {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            console.log(formData);
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log(result);
            router.push('/assesment/thank-you')
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <Box>
            <JsonForms
                schema={jsonSchema}
                validationMode='ValidateAndShow'
                uischema={uiSchema}
                data={formData}
                renderers={materialRenderers}
                onChange={({ data }) => setFormData(data)}
            />
            <BootstrapButton variant="contained" disableRipple onClick={
                handleSubmit
            } >Submit</BootstrapButton>
        </Box>
    )
}

export default index
