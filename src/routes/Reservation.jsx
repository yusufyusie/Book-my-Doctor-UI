import React from 'react';
import Slider from 'react-slick';
import { FaUserDoctor, FaCalendarDays, FaClock } from 'react-icons/fa6';
import { FaFirstAid } from 'react-icons/fa';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import doctors, { reservation } from '../utils/DoctorData';

const Reservation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <TiChevronRightOutline color="#000" />,
    prevArrow: <TiChevronLeftOutline color="#000" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const appointImg = 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div className="flex flex-col justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold uppercase">my reservations</h2>

      <ul className="mt-10">
        <div className="flex items-center justify-between gap-10">
          {/* card slide */}
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Slider {...settings} className="w-full sm:w-[65rem]">
            {reservation.map((item) => {
              const doctor = doctors.find((doc) => doc.id === item.doctor_id);
              return (
                <li key={item.id}>
                  <div>
                    <img src={appointImg} alt="appointment" className="w-full h-32 sm:h-48 rounded-xl" />
                  </div>
                  <div className="flex flex-col mt-4 text-sm sm:text-base">
                    {/* name of doctor appointed */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaUserDoctor />
                        Doctor Appointed
                      </span>
                      <p className="font-semibold ml-7 text-gray-700">
                        Dr.
                        {' '}
                        {doctor.name}
                      </p>
                    </div>
                    {/* date of appointment */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaCalendarDays />
                        Date
                      </span>
                      <p className="font-semibold ml-7 text-gray-700">{item.date}</p>
                    </div>
                    {/* time of appointment */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaClock />
                        Time
                      </span>
                      <p className="font-semibold ml-7 text-gray-700">{item.time}</p>
                    </div>
                    {/* reason for the appointment */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaFirstAid />
                        Reason
                      </span>
                      <p className="font-semibold ml-7 text-gray-700">{item.reason}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </Slider>
        </div>
      </ul>
    </div>
  );
};

export default Reservation;
