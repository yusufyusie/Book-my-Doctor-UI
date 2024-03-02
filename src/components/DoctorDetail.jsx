import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3001/api/doctors/${id}`);
        setDoctor(response.data);
      } catch (error) {
        console.error('Error fetching doctor:', error);
        setError('Doctor not found');
      }
    };
    fetchDoctor();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:3001/api/doctors/${id}`);
      navigate('/doctors'); 
    } catch (error) {
      console.error('Error deleting doctor:', error);
      setError('Failed to delete doctor');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Cost: {doctor.cost}</p>
      <img src={doctor.image_url} alt={doctor.name} style={{ maxWidth: '200px' }} />
      <button onClick={handleDelete}>Delete Doctor</button>
     
    </div>
  );
};

export default DoctorDetail;