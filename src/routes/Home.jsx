// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  FaCameraRetro,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import doctors from '../utils/DoctorData';

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <TiChevronRightOutline color="#000" />,
    prevArrow: <TiChevronLeftOutline color="#000" />,
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h2 className="text-3xl font-bold uppercase">doctors</h2>
      <h4 className="text-xl text-gray-400">Select a doctor</h4>

      <ul className="mt-10">
        <div className="flex items-center justify-between gap-10">
          {/* card slide */}
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Slider {...settings} className="w-[65rem]">
            {doctors.map((item) => (
              <li key={item.id}>
                <Link to={item.id}>
                  <img src={item.image} alt={item.name} className="w-80 h-96 rounded-xl" />
                  <div className="flex flex-col items-center mt-3">
                    <span className="text-xl font-bold">
                      Dr.
                      {' '}
                      {item.name}
                    </span>
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
        </div>
      </ul>
    </div>
  );
};

export default Home;
