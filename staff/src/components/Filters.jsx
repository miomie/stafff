const Filters = ({ term, onUpdateSearch, filter, onUpdateFilter }) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' }
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    let clazz = '';
    if (active) {
      clazz = 'bg-white text-[#385579] font-medium';
    } else {
      clazz = 'bg-[#385579] text-white border border-white/40 hover:bg-[#2d4564]';
    }
    return (
      <button 
        type="button"
        className={`px-4 py-2 rounded-lg text-sm transition ${clazz}`}
        key={name}
        onClick={() => onUpdateFilter(name)}>
          {label}
      </button>
    );
  });

  return (
    <div className="bg-[#385579] p-4 rounded-lg shadow-md mb-6">
      <input 
        type="text"
        className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none mb-4"
        placeholder="Найти сотрудника"
        value={term}
        onChange={(e) => onUpdateSearch(e.target.value)} />
      <div className="flex flex-wrap gap-2">
        {buttons}
      </div>
    </div>
  );
};

export default Filters;