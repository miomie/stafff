import { useForm } from 'react-hook-form';

function CreateEmployee(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  function onSubmit(data) {
    props.onAdd(data.name.trim(), data.salary);
  }

  return (
    <div className="bg-[#385579] p-6 rounded-lg shadow-md text-white">
      <h3 className="text-xl font-bold mb-4">Добавьте нового сотрудника</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            placeholder="Как его зовут?"
            {...register('name', {
              required: 'Введите имя сотрудника'
            })}/>
          <input
            type="number"
            className="w-48 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            placeholder="З/П в $?"
            step="500"
            {...register('salary', {
              required: 'Введите зарплату',
              valueAsNumber: true,
              min: {
                value: 0.01,
                message: 'Зарплата должна быть больше 0'
              }
            })}/>
          <button
            type="submit"
            className="px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-[#385579] font-medium cursor-pointer"
          >
            Добавить
          </button>
        </div>

        {errors.name && (
          <span className="text-red-300 text-sm font-medium">
            {errors.name.message}
          </span>
        )}
        {errors.salary && (
          <span className="text-red-300 text-sm font-medium">
            {errors.salary.message}
          </span>
        )}
      </form>
    </div>
  );
}

export default CreateEmployee;