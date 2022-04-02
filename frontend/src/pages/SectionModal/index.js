import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import getBackendUrl from '../../utilities/getBackendUrl';

function SectionModal() {
  const { idSection, action } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (action === 'edit') {
      axios
        .get(`${getBackendUrl()}/sections/${idSection}`)
        .then((res) => reset({ name: res.data.data.name }))
        .catch((err) => err);
    }
  }, [action, idSection, reset]);

  const onSubmit = (formData) => {
    console.log(formData);
    if (action === 'create') {
      axios
        .post(`${getBackendUrl()}/sections/`, formData)
        .then(() => navigate(-1))
        .catch((err) => err);
    } else {
      axios
        .put(`${getBackendUrl()}/sections/${idSection}`, formData)
        .then(() => navigate(-1))
        .catch((err2) => err2);
    }
  };

  return (
    <>
      <div
        className="bg-black opacity-25 fixed h-screen w-screen top-0 left-0"
        onClick={() => navigate(-1)}
      ></div>
      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="bg-white p-6 rounded w-96">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                className="border border-gray-500 rounded w-full py-2 px-3 text-gray-700"
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="name"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="flex justify-center gap-4">
                <button
                  className="modal-btn bg-gradient-to-tl from-gray-700 to-gray-500"
                  type="submit"
                >
                  {action === 'create' ? 'Create Section' : 'Update Section'}
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SectionModal;
