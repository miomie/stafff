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

  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    setData(data => data.filter(item => item.id !== id));
  };

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: Date.now()
    };
    setData(data => [...data, newItem]);
  };

  const onToggleProp = (id, prop) => {
    setData(data => data.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    }));
  };

  const searchEmp = (items, term) => {
    if (term.length === 0) return items;
    return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
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