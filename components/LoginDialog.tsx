import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

interface LoginDialogProps {
    open: boolean;
    onLogin: (status: boolean) => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            onLogin(true);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <Dialog open={open}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Username"
                    type="text"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleLogin} color="primary">
                    Login
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;
