import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  FaCameraRetro,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';
import doctors from '../utils/DoctorData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <h2 className="text-3xl font-bold uppercase">doctors</h2>
      <h4 className="text-xl text-gray-400">Select a doctor</h4>

      <ul className="slider-container w-3/4">
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <Slider {...settings}>
          {doctors.map((item) => (
            <li key={item.id} className="py-2 px-1">
              <Link to={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-80 h-96 rounded-xl"
                />
                <div className="flex flex-col items-center mt-3">
                  <span className="text-xl font-bold">
                    Dr.
                    {' '}
                    {item.name}
                  </span>
                  <p>....................</p>
                  <span className="text-lg tracking-wide">
                    Specialization is
                    {' '}
                    {item.speciality}
                  </span>
                  <div className="flex gap-5 py-3">
                    <FaFacebookF className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
                    <FaTwitter className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
                    <FaCameraRetro className="border-2 border-slate-400 rounded-full p-1 text-2xl text-slate-400" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default Home;
