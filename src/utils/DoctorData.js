const doctors = [
  {
    id: 1,
    name: 'Amanda',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
    speciality: 'Cardiology',
  },
  {
    id: 2,
    name: 'Charles',
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600',
    speciality: 'Cardiology',
  },
  {
    id: 3,
    name: 'Peter',
    image: 'https://images.pexels.com/photos/12660379/pexels-photo-12660379.jpeg?auto=compress&cs=tinysrgb&w=600',
    speciality: 'Neurology',
  },
  {
    id: 4,
    name: 'Christopher',
    image: 'https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?b=1&s=612x612&w=0&k=20&c=EIVLvYc2SjFbPGq7pKxXAzkUiSqawv5BuyeVzjSIseM=',
    speciality: 'Dentist',
  },
  {
    id: 5,
    name: 'Sandra',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600',
    speciality: 'Dentist',
  },
];

export const reservation = [
  {
    id: 1,
    doctor_id: 5,
    date: '23/02/2023',
    time: '1:00PM',
    reason: 'Consultation and plastering',
  },
  {
    id: 2,
    doctor_id: 3,
    date: '23/04/2023',
    time: '3:00PM',
    reason: 'Consultation',
  },
  {
    id: 3,
    doctor_id: 4,
    date: '03/06/2023',
    time: '10:00AM',
    reason: 'Consultation and plastering',
  },
  {
    id: 4,
    doctor_id: 3,
    date: '12/05/2023',
    time: '8:30AM',
    reason: 'Sugery',
  },
  {
    id: 5,
    doctor_id: 5,
    date: '12/05/2023',
    time: '11:00AM',
    reason: 'Consultation and plastering',
  },
  {
    id: 6,
    doctor_id: 1,
    date: '23/02/2023',
    time: '11:00AM',
    reason: 'Consultation and testing',
  },
  {
    id: 7,
    doctor_id: 2,
    date: '23/02/2023',
    time: '9:30AM',
    reason: 'Consultation and testing',
  },
];

export default doctors;
