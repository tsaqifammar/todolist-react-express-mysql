import axios from 'axios';
import getBackendUrl from '../../utilities/getBackendUrl';

const BACKEND_URL = getBackendUrl();

const getSectionsWithTodos = (page, sectionsPerPage, searchString) => {
  const url = `${BACKEND_URL}/sections-w-todos`;

  const limit = sectionsPerPage;
  const offset = sectionsPerPage * (page - 1);
  const searchInput = searchString;

  return axios
    .get(url, { params: { limit, offset, searchInput } })
    .then((res) => res.data)
    .catch((err) => err);
};

export {
  getSectionsWithTodos,
};
