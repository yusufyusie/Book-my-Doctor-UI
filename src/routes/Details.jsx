import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchDoctors } from '../redux/doctor/doctorSlice';

const Details = () => {
  const { doctorId } = useParams();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctorsContent.data || []);

  const doctor = doctors.find((item) => item.id === parseInt(doctorId, 10));

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (!doctor) {
    return (
      <div className="flex items-center justify-center mt-32">
        <p className="text-2xl font-bold text-red-500">Doctor not found</p>
      </div>
    );
  }

  const capitalize = (str) => str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

  return (
    <div className="flex flex-col items-center w-screen md:h-screen lg:w-full gap-4 bg-white rounded-lg p-8 shadow-lg">
      <Link to="/doctors" className="self-start mb-2 text-blue-700 text-2xl flex items-center">
        <FaArrowLeft className="mr-2" />
        {' '}
        Back
      </Link>
      <h2 className="text-3xl font-bold">{`Dr. ${capitalize(doctor.name)}`}</h2>
      <p className="text-xl text-gray-400">
        Specialization:
        {' '}
        <span className="font-semibold">{capitalize(doctor.specialization)}</span>
      </p>
      {doctor.image ? (
        <div
          className="h-52 w-52 md:h-96 md:w-96 bg-cover bg-center rounded-lg shadow-md"
          style={{ backgroundImage: `url(${doctor.image_url})` }}
        />
      ) : (
        <div className="h-52 w-52 md:h-96 md:w-96 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center text-2xl text-gray-500">
          No image provided
        </div>
      )}
    </div>
  );
};

export default Details;
