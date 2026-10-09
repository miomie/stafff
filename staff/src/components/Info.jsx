const Info = ({ employeesCount, increasedCount }) => {
  return (
    <div className="bg-[#385579] text-white p-6 rounded-lg shadow-md mb-6">
      <h1 className="text-2xl font-bold mb-2">Учет сотрудников компании №</h1>
      <h2 className="text-lg font-medium">Общее число сотрудников: {employeesCount}</h2>
      <h2 className="text-lg font-medium">Премию получат: {increasedCount}</h2>
    </div>
  );
};

export default Info;