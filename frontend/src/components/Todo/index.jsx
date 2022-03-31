import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';
import { toggleTodo } from './processData';

function Todo({ data }) {
  const [isDone, setIsDone] = useState(data.is_done);
  const [urlParams] = useSearchParams();
  
  const handleOnChange = () => {
    setIsDone((c) => !c);
    toggleTodo(data);
  };
  
  return (
    <div className="p-3 border-2 border-gray-300 rounded flex items-center">
      <input type="checkbox" checked={isDone} className="" onChange={handleOnChange} />
      <Link to={`/todo/${data.id}/edit?${urlParams}`} className="ml-4 w-full">
        <div className={`${isDone ? 'line-through text-gray-700' : ''}`}>{data.name}</div>
      </Link>
    </div>
  );
}

Todo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Todo;
