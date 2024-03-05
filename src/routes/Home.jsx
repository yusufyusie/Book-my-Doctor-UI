import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchDoctors } from '../redux/doctor/doctorSlice';
import useWindowSize from '../hooks/windowsSize';
import Doctor from '../components/Doctor';
import { NextArrow, PrevArrow } from '../components/SliderArrows';

const Home = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor);
  const { windowWidth } = useWindowSize();

  const { data } = doctors;

  console.log(data);

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

  let slidesToshow = 1;
  if (windowWidth > 1500) {
    slidesToshow = 3;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: { slidesToshow },
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h2 className="text-3xl font-bold uppercase">doctors</h2>
      <h4 className="text-xl text-gray-400">Select a doctor</h4>

      <div className="mt-10">
        <div className="flex items-center">
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Slider {...settings} className="w-[65rem]">
            {data?.map((item) => (
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
  );
};

export default Home;
