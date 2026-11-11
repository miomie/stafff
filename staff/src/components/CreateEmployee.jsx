import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const employeeSchema = z.object({
  name: z.string().trim().min(1, "Введите имя сотрудника"),
  salary: z.coerce.number().positive("Зарплата должна быть больше 0"),
});

function CreateEmployee(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
  });
  function onSubmit(data) {
    props.onAdd(data.name, data.salary);
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
            {...register("name")}
          />
          <input
            type="number"
            className="w-48 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            placeholder="З/П в $?"
            step="500"
            {...register("salary")}
          />
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
