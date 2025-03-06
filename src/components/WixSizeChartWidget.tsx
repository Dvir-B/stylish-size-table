
import { useEffect, useState } from "react";
import { createWidgetSdk } from "@wix/sdk";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SizeChart from "@/components/SizeChart";

const WixSizeChartWidget = () => {
  const [isWixEnvironment, setIsWixEnvironment] = useState(false);
  const [settings, setSettings] = useState({
    buttonText: "טבלת מידות",
    buttonColor: "outline",
  });

  useEffect(() => {
    const initWixSdk = async () => {
      try {
        const widgetSdk = await createWidgetSdk();
        
        if (widgetSdk) {
          console.log("Widget running in Wix environment");
          setIsWixEnvironment(true);
          
          // Get widget settings if available
          const widgetSettings = await widgetSdk.settings.get();
          if (widgetSettings) {
            setSettings({
              buttonText: widgetSettings.buttonText || "טבלת מידות",
              buttonColor: widgetSettings.buttonColor || "outline",
            });
          }
        }
      } catch (error) {
        console.error("Failed to initialize Wix Widget SDK", error);
      }
    };

    initWixSdk();
  }, []);

  return (
    <div dir="rtl" className="wix-size-chart-widget">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={settings.buttonColor as any || "outline"}
            className="text-fashion-gray hover:text-fashion-purple hover:border-fashion-purple transition-colors"
          >
            {settings.buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <SizeChart />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WixSizeChartWidget;
