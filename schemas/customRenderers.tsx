import { Box, FormControl, FormLabel, Input, Heading, Textarea, Select } from '@chakra-ui/react';
import { ControlProps, LayoutProps, rankWith, uiTypeIs } from '@jsonforms/core';
import { JsonFormsDispatch, withJsonFormsControlProps, withJsonFormsLayoutProps } from '@jsonforms/react';
import React from 'react';

// Custom Chakra Input Control
const ChakraInput = ({ data, handleChange, path, label }: ControlProps) => (
  <FormControl mb={4}>
    <FormLabel>{label}</FormLabel>
    <Input value={data || ''} onChange={(event) => handleChange(path, event.target.value)} />
  </FormControl>
);
// Custom Chakra Textarea Control
const ChakraTextarea = ({ data, handleChange, path, label }: ControlProps) => (
  <FormControl mb={4}>
    <FormLabel>{label}</FormLabel>
    <Textarea value={data || ''} onChange={(event) => handleChange(path, event.target.value)} />
  </FormControl>
);

// Custom Chakra Select Control
const ChakraSelect = ({ data, handleChange, path, label, options }: ControlProps) => (
  <FormControl mb={4}>
    <FormLabel>{label}</FormLabel>
    <Select value={data || ''} onChange={(event) => handleChange(path, event.target.value)}>
      {options.enum.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </FormControl>
);


const ChakraInputControl = withJsonFormsControlProps(ChakraInput);
const ChakraTextareaControl = withJsonFormsControlProps(ChakraTextarea);
const ChakraSelectControl = withJsonFormsControlProps(ChakraSelect);


// Custom Chakra Group Renderer without Accordion
const ChakraGroupRenderer = (props: LayoutProps) => {
  const { uischema, schema, path, visible, renderers } = props;
  const layoutProps = { elements: uischema.elements, schema, path, visible, uischema, renderers };

  return (
    <Box display={visible ? 'block' : 'none'} width="50%" p={4} mb={4}>
      {uischema.elements.map((element, index) => (
        <JsonFormsDispatch key={index} uischema={element} schema={schema} path={path} renderers={renderers} />
      ))}
    </Box>
  );
};

const ChakraGroupLayout = withJsonFormsLayoutProps(ChakraGroupRenderer);



export const chakraRenderers = [
  { tester: rankWith(1, (uischema, schema) => (uischema.type === 'Control' && schema.enum ? true : false)), renderer: ChakraSelectControl },
  { tester: rankWith(1, uiTypeIs('Control')), renderer: ChakraInputControl },
  { tester: rankWith(1, uiTypeIs('Control')), renderer: ChakraTextareaControl },
  { tester: rankWith(2, uiTypeIs('Group')), renderer: ChakraGroupLayout }
];
