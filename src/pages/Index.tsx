import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import SizeChart from "@/components/SizeChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-fashion-background p-8">
      <div className="max-w-4xl mx-auto">
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
    </div>
  );
};

export default Index;