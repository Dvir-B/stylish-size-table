
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SizeChartSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    buttonText: "טבלת מידות",
    buttonColor: "outline",
  });

  useEffect(() => {
    const initDashboardSdk = async () => {
      try {
        setIsLoading(true);
        console.log("Dashboard initializing");
        
        // Use static default settings for development
        const savedSettings = { buttonText: "טבלת מידות", buttonColor: "outline" };
        if (savedSettings) {
          setSettings({
            buttonText: savedSettings.buttonText || "טבלת מידות",
            buttonColor: savedSettings.buttonColor || "outline",
          });
        }
      } catch (error) {
        console.error("Failed to initialize Dashboard SDK", error);
      } finally {
        setIsLoading(false);
      }
    };

    initDashboardSdk();
  }, []);

  const saveSettings = async () => {
    try {
      console.log("Settings saved successfully", settings);
      
      // Show success notification (mock for now)
      alert("ההגדרות נשמרו בהצלחה");
    } catch (error) {
      console.error("Failed to save settings", error);
      
      // Show error notification
      alert("שגיאה בשמירת ההגדרות");
    }
  };

  if (isLoading) {
    return <div className="p-4 text-center">טוען...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 rtl" dir="rtl">
      <Card className="wix-card">
        <CardHeader>
          <CardTitle className="text-right wix-heading">הגדרות טבלת מידות</CardTitle>
        </CardHeader>
        <CardContent>
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

            <Button className="w-full mt-4 wix-button" onClick={saveSettings}>
              שמור הגדרות
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SizeChartSettings;
