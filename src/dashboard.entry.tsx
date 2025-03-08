
import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './pages/dashboard/Dashboard';

// משתמש ב-document.getElementById להרכבת האפליקציה על אלמנט root
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Dashboard />);
}
