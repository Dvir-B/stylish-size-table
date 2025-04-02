
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { SizeData } from "../SizeChart";
import { useLanguage } from "@/contexts/LanguageContext";

interface SizeChartTableProps {
  sizeData: SizeData[];
  updateSizeData: (index: number, field: keyof SizeData, value: string) => void;
  addSizeRow: () => void;
  removeSizeRow: (index: number) => void;
}

const SizeChartTable = ({ 
  sizeData, 
  updateSizeData, 
  addSizeRow, 
  removeSizeRow 
}: SizeChartTableProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className={`p-3 text-sm font-medium text-gray-700 ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('size.column')}
              </th>
              <th className={`p-3 text-sm font-medium text-gray-700 ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('chest.column')}
              </th>
              <th className={`p-3 text-sm font-medium text-gray-700 ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('waist.column')}
              </th>
              <th className={`p-3 text-sm font-medium text-gray-700 ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t('hips.column')}
              </th>
              <th className="p-3 text-sm font-medium text-gray-700">
                {t('actions.column')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((row, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-2">
                  <Input
                    value={row.size}
                    onChange={(e) => updateSizeData(index, "size", e.target.value)}
                    className={`${language === 'he' ? 'text-right' : 'text-left'} h-9`}
                  />
                </td>
                <td className="p-2">
                  <Input
                    value={row.chest}
                    onChange={(e) => updateSizeData(index, "chest", e.target.value)}
                    className={`${language === 'he' ? 'text-right' : 'text-left'} h-9`}
                  />
                </td>
                <td className="p-2">
                  <Input
                    value={row.waist}
                    onChange={(e) => updateSizeData(index, "waist", e.target.value)}
                    className={`${language === 'he' ? 'text-right' : 'text-left'} h-9`}
                  />
                </td>
                <td className="p-2">
                  <Input
                    value={row.hips}
                    onChange={(e) => updateSizeData(index, "hips", e.target.value)}
                    className={`${language === 'he' ? 'text-right' : 'text-left'} h-9`}
                  />
                </td>
                <td className="p-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeSizeRow(index)}
                    className="h-9 w-9"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Button 
        variant="outline" 
        onClick={addSizeRow}
        className="w-full"
      >
        {t('add.row')}
      </Button>
    </div>
  );
};

export default SizeChartTable;
