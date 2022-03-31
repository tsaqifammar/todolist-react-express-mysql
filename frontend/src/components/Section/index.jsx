import { PropTypes } from 'prop-types';
import { HiOutlinePlus } from 'react-icons/hi';
import { BiPencil, BiTrash } from 'react-icons/bi';
import SectionButton from '../SectionButton';
import Todo from '../Todo';

function Section({ data }) {
  const { name, date_created } = data;
  return (
    <div className="bg-white w-full rounded px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="text-xs text-gray-500">
            Created at {date_created.substring(0, date_created.indexOf('T'))}
          </p>
        </div>
        <div>
          <SectionButton className="mr-1 bg-gradient-to-tl from-gray-700 to-gray-500" icon={<HiOutlinePlus />} />
          <SectionButton className="mr-1 bg-gradient-to-tl from-blue-600 to-blue-400" icon={<BiPencil />} />
          <SectionButton className="bg-gradient-to-tl from-red-600 to-red-400" icon={<BiTrash />} />
        </div>
      </div>
      <div className="flex flex-col justify-start gap-3">
        {data.todos.map((todo) => <Todo key={todo.id} data={todo} />)}
      </div>
    </div>
  );
}

Section.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Section;
