import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { v4 as uuidv4 } from 'uuid';

// Create memoized selectors
const selectDoctors = createSelector(
  (state) => state.doctors,
  (doctors) => doctors || {},
);

const selectToken = createSelector(
  (state) => state.auth,
  (auth) => (auth ? auth.token : null),
);

const NewReservation = () => {
  const { doctors = [] } = useSelector(selectDoctors);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [success, setSuccess] = useState(null);
  const [fail, setFail] = useState(null);
  const [, setDoctorId] = useState(null);

  const resetform = () => {
    formRef.current.reset();
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(null);
      setFail(null);
    }, 5000);

    if (success) {
      resetform();
    }
    return () => clearTimeout(timer);
  }, [success, fail, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      doctor: event.target.doctor.value,
      date: event.target.date.value,
      time: event.target.time.value,
      reason: event.target.reason.value,
    };

    const sendData = {
      data,
      token,
    };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center w-full bg-gray-100 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Book an Appointment</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit} ref={formRef}>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
              Select Doctor
              <div className="mt-1">
                <select
                  id="doctor"
                  name="doctor"
                  defaultValue="placeholder"
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="placeholder">Select a doctor</option>
                  {doctors.map((doctor) => (
                    <option key={uuidv4()} value={doctor.id}>
                      {`${doctor.name} (${doctor.speciality})`}
                    </option>
                  ))}
                </select>
              </div>
            </label>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
              <div className="mt-1">
                <input id="date" name="date" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </label>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
              <div className="mt-1">
                <input id="time" name="time" type="time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </label>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for Visit
              <div className="mt-1">
                <textarea id="reason" name="reason" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
            </label>
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
};

export default NewReservation;
