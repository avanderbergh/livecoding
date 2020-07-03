import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/deepOrange';
import green from '@material-ui/core/colors/green';
import { border } from '@material-ui/system'
import Weather from "./components/Weather";
import deepOrange from '@material-ui/core/colors/deepOrange';

import Map from "./components/Map"

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: `999px`,
          },
        },
      },
    }
  }
});




function App() {
  return (
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />} />
  );
}

export default App;
