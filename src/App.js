import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Home from './routes/Home';
import Details from './routes/Details';
import AddDoctor from './routes/AddDoctor';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="sign_up" element={<Signup />} />
      <Route path="doctors" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new" element={<AddDoctor />} />
        <Route path="doctors/:doctorId" element={<Details />} />
      </Route>
      <Route />
    </Routes>
  );
}

export default App;
