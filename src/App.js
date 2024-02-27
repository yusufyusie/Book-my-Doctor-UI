import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Home from './routes/Home';
import Details from './routes/Details';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="sign_in" element={<Signin />} />
        <Route path="sign_up" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route />
      </Routes>
    </>
  );
}

export default App;
