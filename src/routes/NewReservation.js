import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const doctors = [
  {
    id: 1,
    name: 'Dr. Smith',
    specialty: 'Cardiology',
  },
  {
    id: 2,
    name: 'Dr. Johnson',
    specialty: 'Neurology',
  },
];

function NewReservation() {
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center w-full bg-gray-100 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Book an Appointment</h2>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
                Select Doctor
              </label>
              <div className="mt-1">
                <select id="doctor" name="doctor" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select a doctor</option>
                  {doctors.map((doctor) => (
                    <option key={uuidv4()} value={doctor.id}>
                      {`${doctor.name} (${doctor.specialty})`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <div className="mt-1">
                <input id="date" name="date" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <div className="mt-1">
                <input id="time" name="time" type="time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason for Visit
              </label>
              <div className="mt-1">
                <textarea id="reason" name="reason" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewReservation;
