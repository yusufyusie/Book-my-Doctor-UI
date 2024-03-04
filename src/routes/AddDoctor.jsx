import React from 'react';

const AddDoctor = () => (
  <div className="min-h-screen flex flex-col gap-8 justify-center items-center w-full bg-gray-100 py-6 sm:px-6 lg:px-8">
    <div className="mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add a doctor
        </h2>
        <form className="mt-8 space-y-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name of doctor
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
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
                id="image"
                name="image"
                type="text"
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
                id="speciality"
                name="speciality"
                type="text"
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

export default AddDoctor;
