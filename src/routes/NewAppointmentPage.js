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

function NewAppointmentPage() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full">
      <h2 className="font-bold text-2xl">Book an Appointment</h2>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-2" htmlFor="date">
          Date:
          <input className="p-4 rounded-lg" type="date" name="date" id="date" />
        </label>
        <label className="flex flex-col gap-2" htmlFor="time">
          Time:
          <input className="p-4 rounded-lg" type="time" name="time" id="time" />
        </label>
        <label className="flex flex-col gap-2" htmlFor="doctor">
          Select Doctor:
          <select className="p-4 rounded-lg" name="doctor" id="doctor" defaultValue="placeholder" required>
            <option value="placeholder" disabled>Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={uuidv4()} value={doctor.id}>
                {doctor.name}
                {' '}
                (
                {doctor.specialty}
                )
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2" htmlFor="reason">
          Reason for Visit:
          <textarea className="p-4 rounded-lg" name="reason" id="reason" />
        </label>
        <button className="p-4 bg-green-500 rounded-full" type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default NewAppointmentPage;
