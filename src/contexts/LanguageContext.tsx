
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'he' | 'en';

// Define type for the context
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'he',
  setLanguage: () => {},
  t: (key) => key,
});

// Create translations object
const translations: Record<Language, Record<string, string>> = {
  he: {
    // Size Chart Settings
    'settings.title': 'הגדרות טבלת מידות',
    'button.settings.tab': 'כפתור',
    'table.settings.tab': 'טבלת מידות',
    'button.text.label': 'טקסט כפתור',
    'button.style.label': 'סגנון כפתור',
    'button.outline': 'מתאר',
    'button.default': 'מלא',
    'button.secondary': 'משני',
    'save.settings': 'שמור הגדרות',
    'loading': 'טוען...',
    'style.select.placeholder': 'בחר סגנון',

    // Size Chart Table
    'size.column': 'מידה',
    'chest.column': 'חזה (ס״מ)',
    'waist.column': 'מותן (ס״מ)',
    'hips.column': 'ירכיים (ס״מ)',
    'actions.column': 'פעולות',
    'add.row': 'הוסף שורה',
    'size.chart.title': 'טבלת מידות',
    'size.chart.button': 'טבלת מידות',
    'measurements.note': '* המידות מוצגות בסנטימטרים',

    // Dashboard
    'dashboard.title': 'לוח בקרה - טבלת מידות',
    'views.stat': 'צפיות בטבלת מידות',
    'visitors.stat': 'מספר המבקרים',
    'conversion.stat': 'שיעור המרה',
    'sales.stat': 'מכירות',
    'last.week': 'השבוע האחרון',
    'last.month': 'מהחודש שעבר',
    'current.month': 'החודש הנוכחי',
    'size.views.title': 'צפיות בטבלת מידות לפי מידות',
    'tips.title': 'טיפים לשיפור חוויית המשתמש',
    'tip.1': 'הוסיפו תמונה מדריכה לצד טבלת המידות כדי להראות למשתמשים כיצד למדוד נכון.',
    'tip.2': 'שקלו להוסיף כפתור המרה בין יחידות מידה (ס"מ/אינץ\').',
    'tip.3': 'נסו למקם את הכפתור בסמוך לבחירת המידה בעמוד המוצר.',

    // Language settings
    'language.setting': 'שפה',
    'language.hebrew': 'עברית',
    'language.english': 'אנגלית',
  },
  en: {
    // Size Chart Settings
    'settings.title': 'Size Chart Settings',
    'button.settings.tab': 'Button',
    'table.settings.tab': 'Size Chart',
    'button.text.label': 'Button Text',
    'button.style.label': 'Button Style',
    'button.outline': 'Outline',
    'button.default': 'Filled',
    'button.secondary': 'Secondary',
    'save.settings': 'Save Settings',
    'loading': 'Loading...',
    'style.select.placeholder': 'Select Style',

    // Size Chart Table
    'size.column': 'Size',
    'chest.column': 'Chest (cm)',
    'waist.column': 'Waist (cm)',
    'hips.column': 'Hips (cm)',
    'actions.column': 'Actions',
    'add.row': 'Add Row',
    'size.chart.title': 'Size Chart',
    'size.chart.button': 'Size Chart',
    'measurements.note': '* Measurements are displayed in centimeters',

    // Dashboard
    'dashboard.title': 'Dashboard - Size Chart',
    'views.stat': 'Size Chart Views',
    'visitors.stat': 'Number of Visitors',
    'conversion.stat': 'Conversion Rate',
    'sales.stat': 'Sales',
    'last.week': 'Last Week',
    'last.month': 'Last Month',
    'current.month': 'Current Month',
    'size.views.title': 'Size Chart Views by Size',
    'tips.title': 'Tips for Improving User Experience',
    'tip.1': 'Add a guide image next to the size chart to show users how to measure correctly.',
    'tip.2': 'Consider adding a toggle between measurement units (cm/inch).',
    'tip.3': 'Try to position the button near the size selection on the product page.',

    // Language settings
    'language.setting': 'Language',
    'language.hebrew': 'Hebrew',
    'language.english': 'English',
  }
};

// Props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Create the provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize language from localStorage or default to Hebrew
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'he';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Update document direction based on language
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
