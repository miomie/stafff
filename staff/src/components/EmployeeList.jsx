import { AiFillDollarCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const EmployeeItem = ({ name, salary, increase, rise, onDelete, onToggleProp }) => {
  let nameStyle = { color: '#1f2937' };
  let isNameBold = false;

  if (rise) {
    nameStyle = { color: '#eab308' };
    isNameBold = true;
  }

  let salaryStyle = { color: '#374151' };
  if (increase) {
    salaryStyle = { color: '#eab308' };
  }

  return (
    <li className="flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200 last:border-b-0 transition">
      <span 
        className={`cursor-pointer flex-1 text-lg select-none ${isNameBold ? 'font-bold' : ''}`}
        style={nameStyle}
        onClick={onToggleProp} 
        data-toggle="rise">
          {name}
      </span>
      <div className="flex items-center gap-6">
        <input 
          type="text" 
          className="w-24 text-right bg-transparent font-semibold focus:outline-none cursor-default" 
          style={salaryStyle}
          value={`${salary}$`} 
          readOnly 
        />
        <div className="flex items-center gap-2">
          <button type="button"
              className="p-2 text-yellow-500 hover:bg-gray-100 rounded-full transition cursor-pointer"
              onClick={onToggleProp}
              data-toggle="increase"
              title="Премия">
              <AiFillDollarCircle size={22} />
          </button>

          <button type="button"
                  className="p-2 text-red-500 hover:bg-gray-100 rounded-full transition cursor-pointer"
                  onClick={onDelete}
                  title="Удалить">
              <FaTrashAlt size={18} />
          </button>
        </div>
      </div>
    </li>
  );
};

const EmployeeList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <EmployeeItem 
        key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    );
  });

  return (
    <ul className="bg-white rounded-lg shadow-md overflow-hidden mb-6 divide-y divide-gray-200">
      {elements}
    </ul>
  );
};

export default EmployeeList;
