
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardSettings from './pages/dashboard/Settings';

// משתמש ב-document.getElementById להרכבת האפליקציה על אלמנט root
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<DashboardSettings />} />
      </Routes>
    </BrowserRouter>
  );
}
