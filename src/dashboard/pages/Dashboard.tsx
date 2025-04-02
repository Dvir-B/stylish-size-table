
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Dashboard = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className={`max-w-4xl mx-auto p-4 ${language === 'he' ? 'rtl' : 'ltr'}`} dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold ${language === 'he' ? 'text-right' : 'text-left'}`}>
          {t('dashboard.title')}
        </h1>
        <LanguageSwitcher />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <StatCard 
          title={t('views.stat')}
          value="124" 
          description={t('last.week')}
          icon={<BarChart3 className="h-8 w-8 text-blue-500" />} 
        />
        <StatCard 
          title={t('visitors.stat')}
          value="438" 
          description={t('last.week')}
          icon={<Users className="h-8 w-8 text-green-500" />} 
        />
        <StatCard 
          title={t('conversion.stat')} 
          value="3.2%" 
          description={t('last.month')}
          trend="up"
          icon={<TrendingUp className="h-8 w-8 text-purple-500" />} 
        />
        <StatCard 
          title={t('sales.stat')}
          value="₪4,327" 
          description={t('current.month')}
          icon={<ShoppingBag className="h-8 w-8 text-amber-500" />} 
        />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className={language === 'he' ? 'text-right' : 'text-left'}>
            {t('size.views.title')}
          </CardTitle>
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
          <CardTitle className={language === 'he' ? 'text-right' : 'text-left'}>
            {t('tips.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className={language === 'he' ? 'text-right' : 'text-left'}>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="text-green-500 mt-1">✓</span>
              <span>{t('tip.1')}</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-green-500 mt-1">✓</span>
              <span>{t('tip.2')}</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-green-500 mt-1">✓</span>
              <span>{t('tip.3')}</span>
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
