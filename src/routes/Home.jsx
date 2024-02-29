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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <h2 className="text-3xl font-bold uppercase">doctors</h2>
      <h4 className="text-xl text-gray-400">Select a doctor</h4>

      <ul className="w-3/4 border-2">
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <Slider {...settings}>
          {doctors.map((item) => (
            <li key={item.id}>
              <Link to={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-52 rounded-xl"
                />
                <div>
                  <span>{item.name}</span>
                  <p>....................</p>
                  <span>
                    Specialization is
                    {' '}
                    {item.speciality}
                  </span>
                  <div>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaCameraRetro />
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
