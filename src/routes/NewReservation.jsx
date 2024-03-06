import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { fetchDoctors } from '../redux/doctor/doctorSlice';
import { postAppoint } from '../redux/appointment/appointmentSlice';

const NewReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedDoc = location.state;
  const docData = useSelector((state) => state.doctor.doctorsContent.data || []);
  const user = JSON.parse(localStorage.getItem('token'));

  const [docId, setDocId] = useState(selectedDoc ? selectedDoc.id : '');
  const [dateAppoint, setDateAppoint] = useState('');

  const handleAppoint = async (e) => {
    e.preventDefault();

    try {
      const appointData = {
        id: uuidv4(),
        user_id: user.id,
        doctor_id: docId,
        date_of_appointment: dateAppoint,
      };
      await dispatch(postAppoint(appointData));
      setDocId('');
      setDateAppoint('');
      toast.success('Appointment added successfully');
    } catch (err) {
      toast.error('Please fill all fields before you submit');
    }
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center w-full bg-gray-100 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Book an Appointment</h2>
          <form className="mt-8 space-y-6" onSubmit={handleAppoint}>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
              Select Doctor
              <div className="mt-1">
                <select id="doctor" onChange={(e) => setDocId(e.target.value)} value={docId} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="">Select a doctor</option>
                  {docData.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {`Dr. ${doctor.name} (${doctor.specialization})`}
                    </option>
                  ))}
                </select>
              </div>
            </label>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
              <div className="mt-1">
                <input id="date" type="date" value={dateAppoint} onChange={(e) => setDateAppoint(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
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
