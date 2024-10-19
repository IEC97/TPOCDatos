import React from 'react';
import Home from './views/HomePrincipal';
/* import MedicalCenter from './views/MedicalCenter';
import MedicalValues from './views/MedicalValues'; */
import AppBarRaiz from './views/AppBarRaiz';



function App() {
  return (
    <React.Fragment>
      <AppBarRaiz />
      

      <center>
         <Home/>
      </center>

      
    </React.Fragment>
  );
}

export default App;