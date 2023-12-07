import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CinemaTicket from './Components/CinemaTicketApp/CinemaTicket';

function App() {
  return (
    // <div className="App">
    // </div>

    <>
      <Routes>
        <Route element={<CinemaTicket/>} path='/'></Route>
      </Routes>
    </>
  );
}

export default App;
