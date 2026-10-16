import { AiFillDollarCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const EmployeeList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map(item => {
    let nameStyle = { color: '#1f2937' };
    let isNameBold = false;
    if (item.rise) {
      nameStyle = { color: '#eab308' };
      isNameBold = true;
    }
    let salaryStyle = { color: '#374151' }; 
    if (item.increase) {
      salaryStyle = { color: '#eab308' };
    }

    return (
      <li key={item.id} className="flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200 last:border-b-0">
        <span 
          className={`cursor-pointer flex-1 text-lg select-none ${isNameBold ? 'font-bold' : ''}`}
          style={nameStyle}
          onClick={() => onToggleProp(item.id, 'rise')}>
            {item.name}
        </span>
        <div className="flex items-center gap-6">
          <input 
            type="text" 
            className="w-24 text-right bg-transparent font-semibold focus:outline-none cursor-default" 
            style={salaryStyle}
            value={item.salary + '$'} 
            readOnly 
          />
          <div className="flex items-center gap-2">
            <button 
              className="p-2 text-yellow-500 hover:bg-gray-100 rounded-full cursor-pointer"
              onClick={() => onToggleProp(item.id, 'increase')}>
                <AiFillDollarCircle size={22} />
            </button>
            <button 
              className="p-2 text-red-500 hover:bg-gray-100 rounded-full cursor-pointer"
              onClick={() => onDelete(item.id)}>
                <FaTrashAlt size={18} />
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul className="bg-white rounded-lg shadow-md overflow-hidden mb-6 divide-y divide-gray-200">
      {elements}
    </ul>
  );
};

export default EmployeeList;