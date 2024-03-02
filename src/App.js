  import './App.css';
  import { Route, Routes } from 'react-router-dom';
  import Signup from './routes/Signup';
  import Home from './routes/Home';
  import Details from './routes/Details';
  import Layout from './components/Layout';
  import Login from './routes/Login';
import Signin from './routes/Signin';
import DoctorForm from './components/doctor';
import DoctorList from './components/doctorList';
import DoctorDetail from './components/DoctorDetail';


  function App() {  
    return (
      <>
        <Routes>
        <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/add-doctor" element={<DoctorForm />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/" element={<Login />} />
          <Route path="/doctors" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route />
        </Routes>
      </>
    );
  }

  export default App;
