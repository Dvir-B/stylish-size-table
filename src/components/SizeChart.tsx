
import { useLanguage } from "@/contexts/LanguageContext";

export interface SizeData {
  size: string;
  chest: string;
  waist: string;
  hips: string;
}

interface SizeChartProps {
  sizeData?: SizeData[];
}

const defaultSizes: SizeData[] = [
  { size: "XS", chest: "86-91", waist: "71-76", hips: "86-91" },
  { size: "S", chest: "91-97", waist: "76-81", hips: "91-97" },
  { size: "M", chest: "97-102", waist: "81-86", hips: "97-102" },
  { size: "L", chest: "102-107", waist: "86-91", hips: "102-107" },
  { size: "XL", chest: "107-112", waist: "91-96", hips: "107-112" },
];

const SizeChart = ({ sizeData = defaultSizes }: SizeChartProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="w-full animate-fade-in">
      <h2 className={`text-2xl font-semibold text-fashion-gray mb-6 ${language === 'he' ? 'text-center' : 'text-center'} wix-title`}>
        {t('size.chart.title')}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse wix-table">
          <thead>
            <tr className="border-b-2 border-fashion-purple wix-table-header">
              <th className={`p-4 text-fashion-gray ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('size.column')}
              </th>
              <th className={`p-4 text-fashion-gray ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('chest.column')}
              </th>
              <th className={`p-4 text-fashion-gray ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('waist.column')}
              </th>
              <th className={`p-4 text-fashion-gray ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('hips.column')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((size, index) => (
              <tr
                key={size.size}
                className={`
                  border-b border-gray-100 hover:bg-gray-50 transition-colors wix-table-row
                  ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                `}
              >
                <td className={`p-4 ${language === 'he' ? 'text-right' : 'text-left'} font-medium`}>{size.size}</td>
                <td className={`p-4 ${language === 'he' ? 'text-right' : 'text-left'}`}>{size.chest}</td>
                <td className={`p-4 ${language === 'he' ? 'text-right' : 'text-left'}`}>{size.waist}</td>
                <td className={`p-4 ${language === 'he' ? 'text-right' : 'text-left'}`}>{size.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`text-sm text-fashion-gray mt-4 ${language === 'he' ? 'text-right' : 'text-left'}`}>
        {t('measurements.note')}
      </p>
    </div>
  );
};

export default SizeChart;
