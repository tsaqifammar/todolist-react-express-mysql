import { useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Section from '../../components/Section';
import { getSectionsWithTodos } from './fetchData';

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [sectionsData, setSectionsData] = useState([]);
  const [urlParams, setUrlParams] = useSearchParams();
  const location = useLocation();

  const sectionPerPage = 3;

  useEffect(() => {
    async function fetchData() {
      const data = await getSectionsWithTodos(
        urlParams.get('page') || 1,
        sectionPerPage,
        urlParams.get('section')
      );
      setSectionsData(data.data);
      setIsLoading(false);
    }
    fetchData();
  }, [urlParams, setUrlParams, location.key]);

  return (
    <div className="mx-auto h-screen w-4/5 flex flex-col justify-start">
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mt-4 flex flex-col lg:flex-grow lg:grid lg:grid-rows-1 lg:grid-cols-3 sm:mt-8 gap-6">
          {sectionsData.map((section) => (
            <Section key={section.id} data={section} />
          ))}
        </div>
      )}
      <div className="flex justify-center items-center py-6">
        <Pagination sectionPerPage={sectionPerPage} />
      </div>
      <Outlet />
    </div>
  );
}

export default Main;
