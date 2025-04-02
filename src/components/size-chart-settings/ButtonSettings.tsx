
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ButtonSettingsProps {
  settings: {
    buttonText: string;
    buttonColor: string;
  };
  setSettings: (settings: any) => void;
}

const ButtonSettings = ({ settings, setSettings }: ButtonSettingsProps) => {
  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="buttonText" className="text-right wix-label">טקסט כפתור</label>
        <Input
          id="buttonText"
          value={settings.buttonText}
          onChange={(e) => setSettings({ ...settings, buttonText: e.target.value })}
          className="text-right wix-input"
        />
      </div>
      
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="buttonColor" className="text-right wix-label">סגנון כפתור</label>
        <Select
          value={settings.buttonColor}
          onValueChange={(value) => setSettings({ ...settings, buttonColor: value })}
        >
          <SelectTrigger className="w-full wix-select">
            <SelectValue placeholder="בחר סגנון" />
          </SelectTrigger>
          <SelectContent className="wix-select-content">
            <SelectItem value="outline">מתאר</SelectItem>
            <SelectItem value="default">מלא</SelectItem>
            <SelectItem value="secondary">משני</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ButtonSettings;
