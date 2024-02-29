import { useParams, Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaCameraRetro, FaArrowLeft,
} from 'react-icons/fa';
import doctors from '../utils/DoctorData';

const Details = () => {
  const { doctorId } = useParams();
  const doctor = doctors.find((doc) => Number(doc.id) === Number(doctorId));

  if (!doctor) {
    return <p className="text-2xl font-bold text-red-500">Doctor not found</p>;
  }

  const capitalize = (str) => str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-lg p-8 shadow-lg">
      <Link to="/doctors" className="self-start mb-2 text-blue-700 text-2xl flex items-center">
        <FaArrowLeft className="mr-2" />
        {' '}
        Back
      </Link>
      <h2 className="text-3xl font-bold">{`Dr. ${capitalize(doctor.name)}`}</h2>
      <p className="text-xl text-gray-400">
        Specialization:
        {' '}
        <span className="font-semibold">{capitalize(doctor.speciality)}</span>
      </p>
      {doctor.image ? (
        <div
          className="h-52 w-52 md:h-96 md:w-96 bg-cover bg-center rounded-lg shadow-md"
          style={{ backgroundImage: `url(${doctor.image})` }}
        />
      ) : (
        <div className="h-52 w-52 md:h-96 md:w-96 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center text-2xl text-gray-500">
          No image provided
        </div>
      )}
      <div className="flex gap-5 py-3">
        <FaFacebookF className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
        <FaTwitter className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
        <FaCameraRetro className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
      </div>
    </div>
  );
};

export default Details;
