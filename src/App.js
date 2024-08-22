import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Topbar from './scenes/global/topbar';
import MenuBar from './scenes/global/menubar';
import Dashboard from './scenes/dashboard';
import Team from "./scenes/team";
import Form from "./scenes/form"
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pricing from "./scenes/pricing";
import Pie from "./scenes/pie";
import Region from "./scenes/region";
import Invoices from "./scenes/invoices";
import UserManagement from './scenes/Users';
import FAQ from "./scenes/faq";

function App() {
  const { theme, colorMode } = useMode();
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <MenuBar />
        <main className='content'>
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />;
            <Route path="/team" element={<Team />} />;
            <Route path="/users" element={<UserManagement />} />;
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />;
            <Route path="/bar" element={<Bar />} />;
            <Route path="/pie" element={<Pie />} />
            <Route path="/region" element={<Region />} />;
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />

          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>

  );
}

export default App;

