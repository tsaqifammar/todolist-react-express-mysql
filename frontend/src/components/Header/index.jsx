import { Link } from 'react-router-dom';
import { HiOutlinePlus } from 'react-icons/hi';
import SearchBar from '../SearchBar';
import './index.css';

function Header() {
  return (
    <div className="flex flex-col justify-between items-center py-4 sm:flex-row">
      <h1 className="font-bold text-2xl mb-4 sm:mb-0">todo.</h1>
      <div className="flex">
        <SearchBar />
        <Link
          to={`/section/create`}
          className="add-section-btn font-bold fixed right-8 bottom-8 sm:static sm:ml-4"
        >
          <span className="-translate-y-[2px] hidden sm:inline">
            Add Section
          </span>
          <HiOutlinePlus className="sm:ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
