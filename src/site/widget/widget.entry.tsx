
import React from 'react';
import { createRoot } from 'react-dom/client';
import Widget from './Widget';

// משתמש ב-document.getElementById להרכבת האפליקציה על אלמנט root
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Widget />);
}
