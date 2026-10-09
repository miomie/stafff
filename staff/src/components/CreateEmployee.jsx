import { useState } from 'react';

const CreateEmployee = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const onValueChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'salary') setSalary(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !salary) return;
    onAdd(name, salary);
    setName('');
    setSalary('');
  };

  return (
    <div className="bg-[#385579] p-6 rounded-lg shadow-md text-white">
      <h3 className="text-xl font-bold mb-4">Добавьте нового сотрудника</h3>
      <form
          className="flex gap-4"
          onSubmit={onSubmit}>
          <input type="text"
              className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              placeholder="Как его зовут?"
              name="name"
              value={name}
              onChange={onValueChange} />
          <input type="number"
              className="w-48 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              placeholder="З/П в $?"
              name="salary"
              step="500"
              value={salary}
              onChange={onValueChange} />

          <button type="submit"
                  className="px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-[#385579] transition font-medium">
            Добавить
          </button>
      </form>
    </div>
  );
};

export default CreateEmployee;