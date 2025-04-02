
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonSettings from "./size-chart-settings/ButtonSettings";
import SizeChartTable from "./size-chart-settings/SizeChartTable";
import { useSizeChartSettings } from "./size-chart-settings/useSizeChartSettings";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

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
  
  const { t, language } = useLanguage();

  if (isLoading) {
    return <div className="p-4 text-center">{t('loading')}</div>;
  }

  return (
    <div className={`max-w-4xl mx-auto p-4 ${language === 'he' ? 'rtl' : 'ltr'}`} dir={language === 'he' ? 'rtl' : 'ltr'}>
      <Card className="wix-card mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className={`${language === 'he' ? 'text-right' : 'text-left'} wix-heading`}>
            {t('settings.title')}
          </CardTitle>
          <LanguageSwitcher />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="button">
            <TabsList className="mb-4">
              <TabsTrigger value="button">{t('button.settings.tab')}</TabsTrigger>
              <TabsTrigger value="table">{t('table.settings.tab')}</TabsTrigger>
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
            {t('save.settings')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SizeChartSettings;
