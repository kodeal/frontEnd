import React from 'react';
import Routers from 'components/Route/Routers';
import { GlobalFontStyle } from 'font/GlobalStyle';

function App() {
  return (
    <React.StrictMode>
        <GlobalFontStyle/>
        <Routers/>
    </React.StrictMode>
  );
}

export default App;
