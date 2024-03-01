  import './App.css';
  import { Route, Routes } from 'react-router-dom';
  import Signup from './routes/Signup';
  import Home from './routes/Home';
  import Details from './routes/Details';
  import Layout from './components/Layout';
  import Login from './routes/Login';
  import Signin from './routes/Signin';

  function App() {  
    return (
      <>
        <Routes>
        <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
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
