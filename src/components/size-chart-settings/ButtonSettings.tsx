
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface ButtonSettingsProps {
  settings: {
    buttonText: string;
    buttonColor: string;
  };
  setSettings: (settings: any) => void;
}

const ButtonSettings = ({ settings, setSettings }: ButtonSettingsProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="buttonText" className={`${language === 'he' ? 'text-right' : 'text-left'} wix-label`}>
          {t('button.text.label')}
        </label>
        <Input
          id="buttonText"
          value={settings.buttonText}
          onChange={(e) => setSettings({ ...settings, buttonText: e.target.value })}
          className={`${language === 'he' ? 'text-right' : 'text-left'} wix-input`}
        />
      </div>
      
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="buttonColor" className={`${language === 'he' ? 'text-right' : 'text-left'} wix-label`}>
          {t('button.style.label')}
        </label>
        <Select
          value={settings.buttonColor}
          onValueChange={(value) => setSettings({ ...settings, buttonColor: value })}
        >
          <SelectTrigger className="w-full wix-select">
            <SelectValue placeholder={t('style.select.placeholder')} />
          </SelectTrigger>
          <SelectContent className="wix-select-content">
            <SelectItem value="outline">{t('button.outline')}</SelectItem>
            <SelectItem value="default">{t('button.default')}</SelectItem>
            <SelectItem value="secondary">{t('button.secondary')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ButtonSettings;
