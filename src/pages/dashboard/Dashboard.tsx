
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, ShoppingBag } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 rtl" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-right">לוח בקרה - טבלת מידות</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <StatCard 
          title="צפיות בטבלת מידות" 
          value="124" 
          description="השבוע האחרון" 
          icon={<BarChart3 className="h-8 w-8 text-blue-500" />} 
        />
        <StatCard 
          title="מספר המבקרים" 
          value="438" 
          description="השבוע האחרון" 
          icon={<Users className="h-8 w-8 text-green-500" />} 
        />
        <StatCard 
          title="שיעור המרה" 
          value="3.2%" 
          description="מהחודש שעבר" 
          trend="up"
          icon={<TrendingUp className="h-8 w-8 text-purple-500" />} 
        />
        <StatCard 
          title="מכירות" 
          value="₪4,327" 
          description="החודש הנוכחי" 
          icon={<ShoppingBag className="h-8 w-8 text-amber-500" />} 
        />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-right">צפיות בטבלת מידות לפי מידות</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-end justify-between gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => {
              const height = [30, 85, 100, 70, 45][i];
              return (
                <div key={size} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-12 bg-fashion-purple/80 hover:bg-fashion-purple rounded-t transition-colors"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-sm font-medium">{size}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-right">טיפים לשיפור חוויית המשתמש</CardTitle>
        </CardHeader>
        <CardContent className="text-right">
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="text-green-500 mt-1">✓</span>
              <span>הוסיפו תמונה מדריכה לצד טבלת המידות כדי להראות למשתמשים כיצד למדוד נכון.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-green-500 mt-1">✓</span>
              <span>שקלו להוסיף כפתור המרה בין יחידות מידה (ס"מ/אינץ').</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-green-500 mt-1">✓</span>
              <span>נסו למקם את הכפתור בסמוך לבחירת המידה בעמוד המוצר.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: "up" | "down";
}

const StatCard = ({ title, value, description, icon, trend }: StatCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center gap-1">
              {trend === "up" && <span className="text-green-500 text-xs">↑</span>}
              {trend === "down" && <span className="text-red-500 text-xs">↓</span>}
              <p className="text-xs text-gray-400">{description}</p>
            </div>
          </div>
          <div className="p-2 rounded-full bg-gray-100">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
