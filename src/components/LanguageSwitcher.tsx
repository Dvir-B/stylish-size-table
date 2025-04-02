
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-right text-sm font-medium">
        {t('language.setting')}
      </label>
      <ToggleGroup
        type="single"
        value={language}
        onValueChange={(value) => {
          if (value) setLanguage(value as 'he' | 'en');
        }}
        className="justify-end"
      >
        <ToggleGroupItem value="he" aria-label="Hebrew">
          {t('language.hebrew')}
        </ToggleGroupItem>
        <ToggleGroupItem value="en" aria-label="English">
          {t('language.english')}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageSwitcher;
