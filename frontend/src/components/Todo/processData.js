import axios from 'axios';
import getBackendUrl from '../../utilities/getBackendUrl';

const BACKEND_URL = getBackendUrl();

const toggleTodo = (todo) => {
  const url = `${BACKEND_URL}/todos/${todo.id}`;
  axios
    .put(url, {
      name: todo.name,
      description: todo.description,
      is_done: !todo.is_done,
    })
    .then((res) => res)
    .catch((err) => err);
};

export { toggleTodo };
