import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppoint } from '../redux/appointment/appointmentSlice';

const Reservation = () => {
  const dispatch = useDispatch();
  const appoint = useSelector((state) => state.appointment.appointContent.data || []);

  useEffect(() => {
    dispatch(fetchAppoint());
  }, [dispatch]);

  if (appoint.length === 0) {
    return (
      <div className="flex items-center justify-center mt-4">
        <span className="text-xl font-medium">No appointments yet. Create one now!</span>
      </div>
    );
  }

  const appointImg = 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div className="flex flex-col gap-12 p-8 mx-auto">
      <h1 className="text-2xl font-bold">Your appointments</h1>
      <ul className="flex flex-col gap-8 max-w-xs md:max-w-3xl">
        {appoint.map((item, index) => {
          const rawdate = item.user.date_of_appointment;
          const dateObj = new Date(rawdate);
          const formatDate = dateObj.toISOString().split('T')[0];
          return (
            <li key={item.id} className="flex flex-col md:flex-row gap-8 bg-green-50 rounded-lg shadow-lg p-8">
              <div>
                <img src={appointImg} alt="appoint" className="w-80 h-48 rounded-xl" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <h2 className="text-xl font-bold">
                  Appointment #
                  {index + 1}
                </h2>
                <p className="">
                  Doctor Appointed:&nbsp;
                  Dr.
                  {' '}
                  {item.doctor.name}
                </p>
                <p className="">
                  Date:&nbsp;
                  {formatDate}
                </p>
                <p className="">
                  Fee of appointment:&nbsp; $
                  {item.doctor.cost}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reservation;
