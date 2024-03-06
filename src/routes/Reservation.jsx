import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { FaUserDoctor, FaCalendarDays } from 'react-icons/fa6';
import { FaDollarSign } from 'react-icons/fa';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { fetchAppoint } from '../redux/appointment/appointmentSlice';
import useWindowSize from '../hooks/windowsSize';

const Reservation = () => {
  const dispatch = useDispatch();
  const appoint = useSelector((state) => state.appointment.appointContent.data || []);
  const { windowWidth } = useWindowSize();

  let slidesToshow = 3;
  if (windowWidth > 1440) {
    slidesToshow = 1;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToshow,
    slidesToScroll: 1,
    nextArrow: <TiChevronRightOutline color="#000" />,
    prevArrow: <TiChevronLeftOutline color="#000" />,
  };

  useEffect(() => {
    dispatch(fetchAppoint());
  }, [dispatch]);

  if (appoint.length === 0) {
    return (
      <div className="flex items-center justify-center mt-4">
        <span className="text-xl font-medium">No appointments yet. Create one now!</span>
      </div>
    );
  }

  const appointImg = 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h2 className="text-3xl font-bold uppercase">my appointments</h2>

      <ul className="mt-10">
        <div className="flex items-center">
          { /* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...settings} className="w-[65rem]">
            {appoint.map((item, index) => {
              const rawdate = item.user.date_of_appointment;
              const dateObj = new Date(rawdate);
              const formatDate = dateObj.toISOString().split('T')[0];
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <div>
                    <img src={appointImg} alt="appoint" className="w-80 h-48 rounded-xl" />
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
                        {item.doctor.name}
                      </p>
                    </div>
                    {/* date of appointment */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaCalendarDays />
                        Date
                      </span>
                      <p className="text-xl font-semibold ml-7 text-gray-700">{formatDate}</p>
                    </div>
                    {/* fee of appointment */}
                    <div>
                      <span className="flex items-center gap-3 text-lg text-slate-500">
                        <FaDollarSign />
                        Fee of appointment
                      </span>
                      <p className="text-xl font-semibold ml-7 text-gray-700">{`$${item.doctor.cost}`}</p>
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
