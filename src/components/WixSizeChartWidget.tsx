
import { useEffect, useState } from "react";
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
        // For development purposes, we're just using the default settings
        console.log("Widget initializing");
        setIsWixEnvironment(true);
        
        // Use static default settings for now
        const widgetSettings = { buttonText: "טבלת מידות", buttonColor: "outline" };
        if (widgetSettings) {
          setSettings({
            buttonText: widgetSettings.buttonText || "טבלת מידות",
            buttonColor: widgetSettings.buttonColor || "outline",
          });
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
            className="wix-style-button hover:text-fashion-purple hover:border-fashion-purple transition-colors"
          >
            {settings.buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl wix-dialog">
          <SizeChart />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WixSizeChartWidget;
