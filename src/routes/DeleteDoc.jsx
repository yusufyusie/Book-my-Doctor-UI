import React from 'react';
import Slider from 'react-slick';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { FaTrashAlt } from 'react-icons/fa';
import doctors from '../utils/DoctorData';

const DeleteDoc = () => {
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
      <h2 className="text-3xl font-bold uppercase">delete doctors</h2>
      <h4 className="text-xl text-gray-400">Select a doctor to delete</h4>

      <ul className="mt-10">
        <div className="flex items-center justify-between gap-10">
          {/* card slide */}
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Slider {...settings} className="w-[65rem]">
            {doctors.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} className="w-80 h-96 rounded-xl" />
                  <div className="flex flex-col items-center mt-3">
                    <span className="text-xl font-bold">
                      Dr.
                      {' '}
                      {item.name}
                    </span>
                  </div>
                  <div className="mt-6">
                    <button type="button" className="flex items-center justify-center gap-3 bg-[#f70505] w-28 h-8 rounded-lg text-white text-lg">
                      <FaTrashAlt />
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </Slider>
        </div>
      </ul>
    </div>
  );
};

export default DeleteDoc;
