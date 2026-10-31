import { useState } from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-[#385579] font-medium cursor-pointer"
    >
      {pending ? 'Добавление...' : 'Добавить'}
    </button>
  );
}

function CreateEmployee(props) {
  const [error, setError] = useState('');
  async function onSubmit(formData) {
    const name = formData.get('name');
    const salary = formData.get('salary');
    if (!name || !salary) {
      setError('Заполните все поля');
      return;
    }
    const numSalary = Number(salary);
    if (isNaN(numSalary) || numSalary <= 0) {
      setError('Зарплата должна быть больше 0');
      return;
    }
    setError('');
    props.onAdd(name, numSalary);
  }

  return (
    <div className="bg-[#385579] p-6 rounded-lg shadow-md text-white">
      <h3 className="text-xl font-bold mb-4">Добавьте нового сотрудника</h3>
      <form action={onSubmit} className="flex flex-col gap-3">
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            placeholder="Как его зовут?"
          />
          <input
            type="number"
            name="salary"
            className="w-48 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            placeholder="З/П в $?"
            step="500"
          />
          <SubmitButton />
        </div>
        {error && (
          <span className="text-red-300 text-sm font-medium">
            {error}
          </span>
        )}
      </form>
    </div>
  );
}

export default CreateEmployee;