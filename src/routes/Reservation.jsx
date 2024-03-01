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
  };

  const appointImg = 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h2 className="text-3xl font-bold uppercase">my reservations</h2>

      <ul className="mt-10">
        <div className="flex items-center justify-between gap-10">
          {/* card slide */}
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Slider {...settings} className="w-[65rem]">
            {reservation.map((item) => {
              const doctor = doctors.find((doc) => doc.id === item.doctor_id);
              return (
                <li key={item.id}>
                  <div>
                    <img src={appointImg} alt="appointment" className="w-80 h-48 rounded-xl" />
                  </div>
                  <div className="flex flex-col mt-4">
                    {/* name of doctor appointed */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaUserDoctor />
                        Doctor Appointed
                      </span>
                      <p className="text-xl font-semibold ml-7 text-gray-700">
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
                      <p className="text-xl font-semibold ml-7 text-gray-700">{item.date}</p>
                    </div>
                    {/* time of appointment */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaClock />
                        Time
                      </span>
                      <p className="text-xl font-semibold ml-7 text-gray-700">{item.time}</p>
                    </div>
                    {/* reason for the appointment */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaFirstAid />
                        Doctor Appointed
                      </span>
                      <p className="text-xl font-semibold ml-7 text-gray-700">{item.reason}</p>
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
