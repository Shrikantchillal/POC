import { Box, Button, Container, CssBaseline, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Login click');
        navigate('/home');
    }

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <Box sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Grid container justifyContent={'flex-end'}>
                    <Grid item>
                        <Link to='/register'>Dont have account? Register</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};

export default Login;