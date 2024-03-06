import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { postDoctor } from '../redux/doctor/doctorSlice';

const AddDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [cost, setCost] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    const newDoctor = {
      id: uuid(),
      name,
      image_url: image,
      specialization,
      cost,
    };
    if (name && image && specialization && cost) {
      await dispatch(postDoctor(newDoctor));
      setName(''); setImage(''); setSpecialization(''); setCost('');
      navigate('/doctors');
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center w-screen lg:w-full bg-gray-100 py-6 px-6 lg:px-8">
      <div className="mx-auto w-11/12 md:w-1/2">
        <div className="bg-white -mt-20 md:-mt-72 lg:mt-0 py-8 px-4 shadow rounded-xl sm:px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add a doctor
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleAdd}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name of doctor
              <div className="mt-1">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </label>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL (e.g. https://www.random/..../)
              <div className="mt-1">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </label>
            <label
              htmlFor="speciality"
              className="block text-sm font-medium text-gray-700"
            >
              Doctor speciality
              <div className="mt-1">
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </label>
            <label
              htmlFor="fee"
              className="block text-sm font-medium text-gray-700"
            >
              Fee
              <div className="mt-1">
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </label>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
