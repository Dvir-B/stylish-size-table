const SizeChart = () => {
  const sizes = [
    { size: "XS", chest: "86-91", waist: "71-76", hips: "86-91" },
    { size: "S", chest: "91-97", waist: "76-81", hips: "91-97" },
    { size: "M", chest: "97-102", waist: "81-86", hips: "97-102" },
    { size: "L", chest: "102-107", waist: "86-91", hips: "102-107" },
    { size: "XL", chest: "107-112", waist: "91-96", hips: "107-112" },
  ];

  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-2xl font-semibold text-fashion-gray mb-6 text-center">
        טבלת מידות
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-fashion-purple">
              <th className="p-4 text-fashion-gray text-right">מידה</th>
              <th className="p-4 text-fashion-gray text-right">חזה (ס״מ)</th>
              <th className="p-4 text-fashion-gray text-right">מותן (ס״מ)</th>
              <th className="p-4 text-fashion-gray text-right">ירכיים (ס״מ)</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, index) => (
              <tr
                key={size.size}
                className={`
                  border-b border-gray-100 hover:bg-gray-50 transition-colors
                  ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                `}
              >
                <td className="p-4 text-right font-medium">{size.size}</td>
                <td className="p-4 text-right">{size.chest}</td>
                <td className="p-4 text-right">{size.waist}</td>
                <td className="p-4 text-right">{size.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-fashion-gray mt-4 text-right">
        * המידות מוצגות בסנטימטרים
      </p>
    </div>
  );
};

export default SizeChart;