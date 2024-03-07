import React from 'react';
import PropTypes from 'prop-types';
import { FaCameraRetro, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Doctor = ({
  name, image, spec, fee,
}) => (
  <div>
    <img src={image} alt={name} className="w-80 h-96 rounded-xl" />
    <div className="flex flex-col items-center mt-3">
      <span className="text-xl font-bold">
        Dr.
        {' '}
        {name}
      </span>
      <span className="text-lg tracking-wide">
        Specialization is
        {' '}
        {spec}
      </span>
      <span className="text-lg tracking-wide">
        {`Fee: $${fee}`}
      </span>
      <div className="flex gap-5 py-3">
        <FaFacebookF className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
        <FaTwitter className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
        <FaCameraRetro className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
      </div>
    </div>
  </div>
);

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  fee: PropTypes.string.isRequired,
};

export default Doctor;
