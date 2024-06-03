import { Route, Routes } from 'react-router-dom';
import Account from './components/admin-page/Account';
import AddDoctor from './components/admin-page/AddDoctor';
import ViewDoctors from './components/admin-page/ViewDoctors';
import AdminPage from './components/AdminPage';
import AddPatient from './components/doctor-page/AddPatient';
import Appointments from './components/doctor-page/Appointments';
import DoctorAccount from './components/doctor-page/DoctorAccount';
import PatientInfo from './components/doctor-page/PatientInfo';
import ViewPatient from './components/doctor-page/ViewPatient';
import DoctorPage from './components/DoctorPage';
import Home from './components/Home';
import BookAppointment from './components/patient-page/BookAppointment';
import PatientAccount from './components/patient-page/PatientAccount';
import Reports from './components/patient-page/Reports';
import PatientPage from './components/PatientPage';
import YogAI from './components/Yogai';
import './styles/App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const RedirectToYogAI = () => {
    useEffect(() => {
      window.location.href = "http://127.0.0.1:5500/yogAI/index.html";
    }, []);
  
    return null; // or a loading spinner, message, etc.
  };
  const RedirectToComfortConnect = () => {
    useEffect(() => {
      window.location.href = "http://127.0.0.1:5500/mentalHealth_app/Web%20App/index.html";
    }, []);
  
    return null; // or a loading spinner, message, etc.
  };

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/yogai' element={<YogAI />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/doctor' element={<DoctorPage />} />
      <Route path='/patient' element={<PatientPage />} />
      <Route path='/admin/add-doctor' element={<AddDoctor />} />
      <Route path='/admin/view-doc' element={<ViewDoctors />} />
      <Route path='/admin/account' element={<Account />} />
      <Route path='/doctor/add-patient' element={<AddPatient />} />
      <Route path='/doctor/view-patient' element={<ViewPatient />} />
      <Route path='/doctor/patient-info' element={<PatientInfo />} />
      <Route path='/doctor/appointments' element={<Appointments />} />
      <Route path='/doctor/account' element={<DoctorAccount />} />
      <Route path='/patient/view-doctor' element={<BookAppointment />} />
      <Route path='/patient/reports' element={<Reports />} />
      <Route path='/patient/account' element={<PatientAccount />} />
    </Routes>
  );
}

export default App;
