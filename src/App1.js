import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import VistaAdmin from './views/VistaAdmin';

const defaultTheme = createTheme();

export default function SignIn() {
  

  const validCredentials = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'admin123' },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
  
    // Validar el email
    if (!validateEmail(email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }
  
    // Validar la contraseña
    if (!validatePassword(password)) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
  
    // Simulación de autenticación
    const user = validCredentials.find(
      (credential) => credential.email === email && credential.password === password
    );
  
    if (user) {
      alert('Inicio de sesión exitoso!');
      console.log('Usuario autenticado:', { email });
      // Aquí podrías redirigir al usuario
      //window.location.href = '/dashboard';
    } else {
      alert('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
