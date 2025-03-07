
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SizeChart from "@/components/SizeChart";

const Index = () => {
  const [isWixEnvironment, setIsWixEnvironment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize environment check
    const initWixSdk = async () => {
      try {
        setIsLoading(true);
        // For development purposes, assume not in Wix environment
        console.log("Main page initializing");
        setIsWixEnvironment(false);
      } catch (error) {
        console.error("Failed to initialize environment", error);
      } finally {
        setIsLoading(false);
      }
    };

    initWixSdk();
  }, []);

  if (isLoading) {
    return <div className="p-4 text-center">טוען...</div>;
  }

  return (
    <div className={`min-h-screen ${isWixEnvironment ? "" : "bg-fashion-background"} p-4 md:p-8 rtl`}>
      <div className="max-w-4xl mx-auto">
        {isWixEnvironment ? (
          <div className="border rounded-md p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-right">הגדרת טבלת מידות</h2>
            <p className="text-fashion-gray mb-4 text-right">
              הוספת טבלת מידות לחנות שלך תעזור ללקוחות לבחור את הגודל המתאים.
            </p>
            <SizeChartPreview />
          </div>
        ) : (
          <SizeChartPreview />
        )}
      </div>
    </div>
  );
};

// Preview component to show how the size chart will look in the store
const SizeChartPreview = () => {
  return (
    <div className="mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-fashion-gray hover:text-fashion-purple hover:border-fashion-purple transition-colors"
          >
            טבלת מידות
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <SizeChart />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
