
import { useState, useEffect } from "react";
import { SizeData } from "../SizeChart";

interface SettingsState {
  buttonText: string;
  buttonColor: string;
}

export const useSizeChartSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<SettingsState>({
    buttonText: "טבלת מידות",
    buttonColor: "outline",
  });
  
  const [sizeData, setSizeData] = useState<SizeData[]>([
    { size: "XS", chest: "86-91", waist: "71-76", hips: "86-91" },
    { size: "S", chest: "91-97", waist: "76-81", hips: "91-97" },
    { size: "M", chest: "97-102", waist: "81-86", hips: "97-102" },
    { size: "L", chest: "102-107", waist: "86-91", hips: "102-107" },
    { size: "XL", chest: "107-112", waist: "91-96", hips: "107-112" },
  ]);

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
        
        // בעתיד נוכל לשמור ולטעון את נתוני הטבלה מהשרת
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
      console.log("Settings saved successfully", { settings, sizeData });
      
      // Show success notification (mock for now)
      alert("ההגדרות נשמרו בהצלחה");
    } catch (error) {
      console.error("Failed to save settings", error);
      
      // Show error notification
      alert("שגיאה בשמירת ההגדרות");
    }
  };
  
  const addSizeRow = () => {
    setSizeData([...sizeData, { size: "", chest: "", waist: "", hips: "" }]);
  };
  
  const removeSizeRow = (index: number) => {
    const newSizeData = [...sizeData];
    newSizeData.splice(index, 1);
    setSizeData(newSizeData);
  };
  
  const updateSizeData = (index: number, field: keyof SizeData, value: string) => {
    const newSizeData = [...sizeData];
    newSizeData[index][field] = value;
    setSizeData(newSizeData);
  };

  return {
    isLoading,
    settings,
    setSettings,
    sizeData,
    saveSettings,
    addSizeRow,
    removeSizeRow,
    updateSizeData
  };
};
