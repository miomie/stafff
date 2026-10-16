import { useState } from 'react';
import Info from './components/Info';
import Filters from './components/Filters';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

function App() {
  const [data, setData] = useState([
    { name: 'Mike', salary: 1000, increase: false, rise: true, id: 1 },
    { name: 'Jack', salary: 1200, increase: true, rise: false, id: 2 },
    { name: 'John', salary: 800, increase: false, rise: false, id: 3 },
  ]);

//стейты для поиска и фильтров кнопок
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

//удаляем
  const deleteItem = (id) => {
  const updatedData = data.filter((item) => {
    if (item.id !== id) {
      return true;
    } else {
      return false;
    }
  });
  setData(updatedData);
};

//добавляем нового сотрудника и выводл в консоль
  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: Date.now()
    };
    const updatedData = [...data, newItem];
    setData(updatedData);
    console.log("Полный массив работников:", updatedData);
  };

//менять его премию ил поыышение
const onToggleProp = (id, prop) => {
  const updatedData = data.map((item) => {
    if (item.id === id) {
      const updatedItem = { ...item };
      updatedItem[prop] = !item[prop];
      return updatedItem;
    } else {
      return item;
    }
  });
  setData(updatedData);
};

//поиск и фильтры кнопочки
const searchEmp = (items, term) => {
  if (term.length === 0) {
    return items;
  }
  return items.filter((item) => {
    return item.name.toLowerCase().includes(term.toLowerCase());
  });
};
  const filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  };

  const employeesCount = data.length;
  const increasedCount = data.filter(item => item.increase).length;
  const visibleData = filterPost(searchEmp(data, term), filter);
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <Info employeesCount={employeesCount} increasedCount={increasedCount} />
      <Filters 
        term={term} 
        onUpdateSearch={setTerm} 
        filter={filter} 
        onUpdateFilter={setFilter} 
      />
      <EmployeeList 
        data={visibleData} 
        onDelete={deleteItem} 
        onToggleProp={onToggleProp} 
      />
      <CreateEmployee onAdd={addItem} />
    </div>
  );
}

export default App;