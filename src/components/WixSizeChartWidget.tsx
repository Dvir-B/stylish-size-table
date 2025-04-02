
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SizeChart, { SizeData } from "@/components/SizeChart";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

const WixSizeChartWidgetContent = () => {
  const [isWixEnvironment, setIsWixEnvironment] = useState(false);
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

  const { t, language } = useLanguage();

  useEffect(() => {
    const initWixSdk = async () => {
      try {
        // For development purposes, we're just using the default settings
        console.log("Widget initializing");
        setIsWixEnvironment(true);
        
        // ב-SDK אמיתי היינו משתמשים ב-Wix SDK לקבלת נתונים
        // const { widgetSettings } = await wixWidgetSdk.settings.get();
        
        // Use static default settings for now
        const widgetSettings = { 
          buttonText: language === 'he' ? "טבלת מידות" : "Size Chart", 
          buttonColor: "outline",
          // בעתיד נוכל לקבל גם את נתוני הטבלה מהשרת
        };
        
        if (widgetSettings) {
          setSettings({
            buttonText: widgetSettings.buttonText || t('size.chart.button'),
            buttonColor: widgetSettings.buttonColor || "outline",
          });
        }
      } catch (error) {
        console.error("Failed to initialize Wix Widget SDK", error);
      }
    };

    initWixSdk();
  }, [language, t]);

  return (
    <div dir={language === 'he' ? 'rtl' : 'ltr'} className="wix-size-chart-widget">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={settings.buttonColor as any || "outline"}
            className="wix-style-button hover:text-fashion-purple hover:border-fashion-purple transition-colors"
          >
            {settings.buttonText || t('size.chart.button')}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl wix-dialog">
          <SizeChart sizeData={sizeData} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Wrapper component that includes LanguageProvider
const WixSizeChartWidget = () => {
  return (
    <LanguageProvider>
      <WixSizeChartWidgetContent />
    </LanguageProvider>
  );
};

export default WixSizeChartWidget;
