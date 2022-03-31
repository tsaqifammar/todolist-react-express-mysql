import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { getSectionsWithTodos } from './fetchData';

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [sectionsData, setSectionsData] = useState([]);
  const [urlParams] = useSearchParams();

  const sectionPerPage = 3;

  useEffect(() => {
    async function fetchData() {
      const data = await getSectionsWithTodos(
        1,
        sectionPerPage,
        urlParams.get('section')
      );
      setSectionsData(data.data);
      setIsLoading(false);
    }
    fetchData();
  }, [urlParams]);

  return (
    <div className="mx-auto h-screen w-4/5">
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mt-4 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 sm:mt-8 gap-6">
          {sectionsData.map((section) => (
            <Section key={section.id} data={section} />
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Main;
