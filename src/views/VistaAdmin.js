import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const VistaAdmin = () => {
  const [genre, setGenre] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hacer la solicitud a la API para obtener la predicción
    const response = await fetch('/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        genre_encoded: genre,
        Single_Player_Main_Story_Average: minutes, // Este debe coincidir con lo que espera el backend
      }),
    });
    
    if (response.ok) {
      const data = await response.json();
      setPrediction(data.prediction);
    } else {
      console.error('Error en la solicitud:', response.statusText);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Recomendación de Juegos
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Género"
          variant="outlined"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Minutos"
          type="number"
          variant="outlined"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Recomendar
        </Button>
      </form>
      {prediction && (
        <Typography variant="h6" marginTop={2}>
          Juego Recomendado: {prediction}
        </Typography>
      )}
    </Container>
  );
};

export default VistaAdmin;
