
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SizeData } from "./SizeChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2 } from "lucide-react";

const SizeChartSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
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

  if (isLoading) {
    return <div className="p-4 text-center">טוען...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 rtl" dir="rtl">
      <Card className="wix-card mb-6">
        <CardHeader>
          <CardTitle className="text-right wix-heading">הגדרות טבלת מידות</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="button">
            <TabsList className="mb-4">
              <TabsTrigger value="button">כפתור</TabsTrigger>
              <TabsTrigger value="table">טבלת מידות</TabsTrigger>
            </TabsList>
            
            <TabsContent value="button">
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
            </TabsContent>
            
            <TabsContent value="table">
              <div className="space-y-6">
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-right">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-sm font-medium text-gray-700">מידה</th>
                        <th className="p-3 text-sm font-medium text-gray-700">חזה (ס״מ)</th>
                        <th className="p-3 text-sm font-medium text-gray-700">מותן (ס״מ)</th>
                        <th className="p-3 text-sm font-medium text-gray-700">ירכיים (ס״מ)</th>
                        <th className="p-3 text-sm font-medium text-gray-700">פעולות</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeData.map((row, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="p-2">
                            <Input
                              value={row.size}
                              onChange={(e) => updateSizeData(index, "size", e.target.value)}
                              className="text-right h-9"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              value={row.chest}
                              onChange={(e) => updateSizeData(index, "chest", e.target.value)}
                              className="text-right h-9"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              value={row.waist}
                              onChange={(e) => updateSizeData(index, "waist", e.target.value)}
                              className="text-right h-9"
                            />
                          </td>
                          <td className="p-2">
                            <Input
                              value={row.hips}
                              onChange={(e) => updateSizeData(index, "hips", e.target.value)}
                              className="text-right h-9"
                            />
                          </td>
                          <td className="p-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => removeSizeRow(index)}
                              className="h-9 w-9"
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={addSizeRow}
                  className="w-full"
                >
                  הוסף שורה
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <Button className="w-full mt-6 wix-button" onClick={saveSettings}>
            שמור הגדרות
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SizeChartSettings;
