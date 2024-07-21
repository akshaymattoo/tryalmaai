import React from 'react'
import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import jsonSchema from '../../schemas/jsonSchema.json';
import uiSchema from '../../schemas/uiSchema.json';
import { materialRenderers } from '@jsonforms/material-renderers';
import { useRouter } from 'next/router'
import { Box, Button } from '@mui/material';

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
            <Button sx={{ color: 'white', backgroundColor: 'black' }} variant="contained" disableRipple onClick={
                handleSubmit
            } >Submit</Button>
        </Box>
    )
}

export default index
