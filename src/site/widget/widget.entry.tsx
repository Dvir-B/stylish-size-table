
import React from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Widget from './Widget';

// Root element for the widget
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <LanguageProvider>
      <Widget />
    </LanguageProvider>
  );
}
