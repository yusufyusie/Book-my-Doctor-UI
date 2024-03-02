import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3001/api/doctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();
        setDoctors(data.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setError('An unexpected error occurred');
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Cost: {doctor.cost}</p>
            <Link to={`/doctors/${doctor.id}`}>See Details</Link>
            <img src={doctor.image_url} alt={doctor.name} style={{ maxWidth: '200px' }} />
          </li>
        ))}
       
      </ul>
      
    </div>
  );
};

export default DoctorList;
