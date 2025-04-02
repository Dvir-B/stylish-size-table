
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonSettings from "./size-chart-settings/ButtonSettings";
import SizeChartTable from "./size-chart-settings/SizeChartTable";
import { useSizeChartSettings } from "./size-chart-settings/useSizeChartSettings";

const SizeChartSettings = () => {
  const {
    isLoading,
    settings,
    setSettings,
    sizeData,
    saveSettings,
    addSizeRow,
    removeSizeRow,
    updateSizeData
  } = useSizeChartSettings();

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
              <ButtonSettings settings={settings} setSettings={setSettings} />
            </TabsContent>
            
            <TabsContent value="table">
              <SizeChartTable
                sizeData={sizeData}
                updateSizeData={updateSizeData}
                addSizeRow={addSizeRow}
                removeSizeRow={removeSizeRow}
              />
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
