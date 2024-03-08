import React, { useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { FaTrashAlt } from 'react-icons/fa';
import { fetchDoctors } from '../redux/doctor/doctorSlice';
import getHeaders from '../api/api_helper';

const DeleteDoc = () => {
  const dispatch = useDispatch();
  const doctorsData = useSelector((state) => state.doctor.doctorsContent.data || []);

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
          infinite: false,
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

  const handleDelete = async (doctorId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/doctors/${doctorId}`, getHeaders());
      dispatch(fetchDoctors());
    } catch (error) {
      toast.error(`Failed to delete doctor ${error}`);
    }
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (doctorsData.length === 0) {
    return (
      <div className="flex items-center justify-center mt-4">
        <span className="text-xl font-medium">No Doctors yet. Create one now!</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen lg:w-full mt-5">
      <h2 className="text-3xl font-bold uppercase">delete doctors</h2>
      <h4 className="text-xl text-gray-400">Select a doctor to delete</h4>

      <ul className="mt-10">
        <div>
          {/* card slide */}
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Slider {...settings} className="w-72 md:w-[40rem] lg:w-[65rem]">
            {doctorsData.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image_url} alt={item.name} className="w-80 h-96 rounded-xl" />
                  <div className="flex flex-col items-center mt-3">
                    <span className="text-xl font-bold">
                      Dr.
                      {' '}
                      {item.name}
                    </span>
                  </div>
                  <div className="mt-6">
                    <button type="button" onClick={() => handleDelete(item.id)} className="flex items-center justify-center gap-3 bg-[#f70505] w-28 h-8 rounded-lg text-white text-lg">
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
