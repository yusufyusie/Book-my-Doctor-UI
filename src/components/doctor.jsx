import React, { useState } from 'react';

const DoctorForm = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [cost, setCost] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, specialization, cost, image_url: imageUrl };

    try {
      const token = localStorage.getItem('accessToken'); // Our  the token is stored in localStorage
      const response = await fetch('http://127.0.0.1:3001//api/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Included the token in the Authorization header
        },
        body: JSON.stringify({ doctor: formData }),
      });
      
    } catch (error) {
      console.error('Error creating doctor:', error);
      setError('An unexpected error occurred');
    }
    
  };

  return (
    <div>
      <h2>Create a New Doctor</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Specialization:</label>
          <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
        </div>
        <div>
          <label>Cost:</label>
          <input type="number" value={cost} onChange={(e) => setCost(parseFloat(e.target.value))} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <button type="submit">Create Doctor</button>
      </form>
    </div>
  );
};

export default DoctorForm;
