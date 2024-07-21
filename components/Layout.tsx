// components/Layout.tsx
import React, { ReactNode } from 'react';
import { Avatar, Box, CssBaseline, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router'

const drawerWidth = 240;

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <Typography fontSize={48} marginLeft={2} onClick={() => router.push("/")} >Alma</Typography>
                    <List>
                        <ListItem button key="Leads">
                            <ListItemText primary="Leads" />
                        </ListItem>
                        <ListItem button key="Settings">
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </List>
                </Box>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
