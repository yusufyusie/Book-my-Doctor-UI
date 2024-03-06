import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { fetchDoctors } from '../redux/doctor/doctorSlice';
import Doctor from '../components/Doctor';
import Greetings from '../components/Greetings';

const Home = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctorsContent.data || []);

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
  }
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
};

export default Home;
