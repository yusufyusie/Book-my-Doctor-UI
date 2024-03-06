import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Home from './routes/Home';
import Details from './routes/Details';
import AddDoctor from './routes/AddDoctor';
import DeleteDoc from './routes/DeleteDoc';
import Reservation from './routes/Reservation';
import NewReservation from './routes/NewReservation';
import Layout from './components/Layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="sign_up" element={<Signup />} />
        <Route path="doctors" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<AddDoctor />} />
          <Route path=":doctorId" element={<Details />} />
          <Route path="delete" element={<DeleteDoc />} />
        </Route>
        <Route path="appointments" element={<Layout />}>
          <Route index element={<Reservation />} />
          <Route path="new" element={<NewReservation />} />
        </Route>
        <Route />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
