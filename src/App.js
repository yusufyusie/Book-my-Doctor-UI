import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Home from './routes/Home';
import Details from './routes/Details';
import Layout from './components/Layout';
import NewAppointmentPage from './routes/NewAppointmentPage'; // make sure the path is correct

function App() {
  return (
    <Routes>
      <Route path="sign_in" element={<Signin />} />
      <Route path="sign_up" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="new-appointment" element={<NewAppointmentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
