import React from 'react';
import Button from '../components/Button';


export default function ContainedButtons() {

    return (
        <div  align="center">
          <Button 
            variant="contained" 
            position="fixed"
            component="a"
            size="large"
            color="secondary" 
            href="/ViewSearch">
            
             Pacientes
          </Button>
          <Button 
            variant="contained" 
            position="fixed"
            component="a"
            size="large"
            color="secondary"
            href= "/ViewTurnos">
            Turnos
          </Button>

        </div>

      );
      
  }
