import { Route, Routes } from 'react-router-dom';
import './App.css';
import Diet from './components/Diet/Diet';
import Exercise from './components/Exercise/Exercise';
import Bmi from './components/Header/Bmi';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reminder from './components/Reminder/Reminder';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reminder" element={<Reminder />} />
        <Route exact path="/diet" element={<Diet />} />
        <Route exact path="/exercise" element={<Exercise />} />
        <Route exact path="/bmi" element={<Bmi />} />
      </Routes>
    </>
  );
}

export default App;
