<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> dev
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { fetchDoctors } from '../redux/doctor/doctorSlice';
import useWindowSize from '../hooks/windowsSize';
import Doctor from '../components/Doctor';
import Greetings from '../components/Greetings';

<<<<<<< HEAD
const settings = {
  dots: true,
  infinite: false,
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
=======
const Home = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctorsContent.data || []);
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (doctors.length === 0) {
    return (
      <div className="flex items-center justify-center mt-4">
        <span className="text-xl font-medium">No Doctors yet. Create one now!</span>
      </div>
    );
  }

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

  return (
    <>
      <Greetings />
      <div className="flex flex-col justify-center items-center mt-5">
        <h2 className="text-3xl font-bold uppercase">doctors</h2>
        <h4 className="text-xl text-gray-400">Select a doctor</h4>

        <div className="mt-10">
          <div className="flex items-center justify-center">
            { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
            <Slider {...settings} className="w-[65rem]">
              {doctors?.map((item) => (
                <Link to={`/doctors/${item.id}`} key={item.id}>
                  <Doctor
                    name={item.name}
                    image={item.image_url}
                    spec={item.specialization}
                    fee={item.cost}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
>>>>>>> dev
};

const Home = () => (
  <div className="flex flex-col justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold uppercase text-center">doctors</h2>
    <h4 className="text-xl text-gray-400 text-center">Select a doctor</h4>

    <ul className="mt-10 w-full">
      <div className="flex items-center justify-center gap-10">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings} className="w-full">
          {doctors.map((item) => (
            <li key={item.id} className="px-4">
              <Link to={`/doctors/${item.id}`}>
                <img src={item.image} alt={item.name} className="w-full h-96 rounded-xl object-cover" />
                <div className="flex flex-col items-center mt-3">
                  <span className="text-xl font-bold text-center">
                    Dr.
                    {' '}
                    {item.name}
                  </span>
                  <span className="text-lg tracking-wide text-center">
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

export default Home;
