import { useNavigate, useParams } from 'react-router-dom';
import './index.css';

function TodoModal() {
  const { idTodo, action } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-black opacity-25 fixed h-screen w-screen top-0 left-0"
        onClick={() => navigate(-1)}
      ></div>
      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="bg-white p-6 rounded w-96">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="title"
              >
                Title*
              </label>
              <input
                className="border border-gray-500 rounded w-full py-2 px-3 text-gray-700"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="description"
              >
                Description
              </label>
              <textarea
                className="border border-gray-500 rounded w-full py-2 px-3 text-gray-700"
                name="title"
              />
            </div>

            <div className="flex justify-center gap-4">
              {action === 'create' ? (
                <button
                  className="modal-btn bg-gradient-to-tl from-gray-700 to-gray-500"
                  type="submit"
                >
                  Create Todo
                </button>
              ) : (
                <>
                  <button
                    className="modal-btn bg-gradient-to-tl from-gray-700 to-gray-500"
                    type="submit"
                  >
                    Save Todo
                  </button>
                  <button
                    className="modal-btn bg-gradient-to-tl from-red-600 to-red-400"
                    type="button"
                  >
                    Delete Todo
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoModal;
