import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import LoginDialog from '../../components/LoginDialog';
import { Button, Typography, Box, TextField, Select, MenuItem } from '@mui/material';
import Layout from '../../components/Layout';

function createData(
    name: string,
    submitted: string,
    status: string,
    country: string,
) {
    return { name, submitted, status, country };
}

interface Lead {
    name: string;
    submitted: string;
    status: string;
    country: string;
}
const rows: Lead[] = [
    createData('Akshay', '07/11/2024', 'Pending', 'United States'),
    createData('Adam', '07/11/2024', 'Pending', 'India'),
    createData('John', '07/11/2024', 'Pending', 'Mexico'),
    createData('Mike', '07/11/2024', 'Pending', 'Canada'),
    createData('Dino', '07/11/2024', 'Pending', 'United States'),
    createData('AkshayM', '07/11/2024', 'Pending', 'United States'),
    createData('AdamB', '07/11/2024', 'Pending', 'India'),
    createData('JohnK', '07/11/2024', 'Pending', 'Mexico'),
    createData('MikeL', '07/11/2024', 'Pending', 'Canada'),
    createData('DinoF', '07/11/2024', 'Pending', 'United States'),
];


export default function index() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(true);
    const [leadsData, setLeadsData] = useState<Lead[]>(rows);
    const [selectedStatus, setSelectedStatus] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
            setOpen(false);
        }
    }, []);

    const handleLogin = (status: boolean) => {
        if (status) {
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuthenticated(true);
            setOpen(false);
        }
    };

    const handleStatusChange = (index: number) => {
        const newLeadsData = [...rows];
        newLeadsData[index].status = newLeadsData[index].status === 'Pending' ? 'Reached Out' : 'Pending';
        setLeadsData(newLeadsData);
    };

    const handleFilterChange = (event: any) => {
        setSelectedStatus(event.target.value as string);
    };

    // const filteredLeadsData = selectedStatus
    //     ? leadsData.filter((lead) => lead.status === selectedStatus)
    //     : leadsData;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredLeadsData = leadsData.filter((lead) => {
        const matchesStatus = selectedStatus ? lead.status === selectedStatus : true;
        const matchesSearchQuery = lead.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearchQuery;
    });
    return (
        <Box>
            <LoginDialog open={open} onLogin={handleLogin} />
            {isAuthenticated && (

                <Layout>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h4" component="h1">Leads</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <TextField label="Search Name" variant="outlined" value={searchQuery} onChange={handleSearchChange} />
                        <Select label="Status" displayEmpty onChange={handleFilterChange}>
                            <MenuItem value="All"><em>All</em></MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Reached Out">Reached Out</MenuItem>
                        </Select>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Submitted</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Country</TableCell>
                                    <TableCell align="right">Actions</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredLeadsData.map((lead, index) => (
                                    <TableRow key={lead.name}>
                                        <TableCell component="th" scope="row">
                                            {lead.name}
                                        </TableCell>
                                        <TableCell align="right">{lead.submitted}</TableCell>
                                        <TableCell align="right">{lead.status}</TableCell>
                                        <TableCell align="right">{lead.country}</TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" onClick={() => handleStatusChange(index)}>
                                                Change Status
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Layout>
            )}
        </Box>
    );
}