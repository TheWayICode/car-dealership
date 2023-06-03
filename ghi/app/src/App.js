import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from './Nav';
import Footer from './Footer';
import MainPage from './MainPage';
import CustomerList from './Components/Customer/CustomerList';
import SalesRecordList from './Components/Sales/SalesRecordList';
import SalesHistory from './Components/Sales/SalesRecordHistory';
import AppointmentList from './Components/Appointment/AppointmentList';
import TechnicianList from './Components/Technician/TechnicianList';
import ManufacturerList from './Components/Manufacturer/ManufacturerList';
import VehicleModelList from './Components/VehicleModel/VehicleModelList';
import AutomobileList from './Components/Automobile/AutomobileList';
import ServiceHistory from './Components/Appointment/ServiceHistory';
import Employee from './Components/Sales/Employee';


function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="appointments" element={<AppointmentList />} />
        <Route path="servicehistory" element={<ServiceHistory/>}/>
        <Route path="manufacturers" element={<ManufacturerList />} />
        <Route path="customer" element={<CustomerList />} />
        <Route path="employee" element={<Employee />} />
        <Route path="saleshistory" element={<SalesHistory />} />
        <Route path="salesrecord" element={<SalesRecordList />} />
        <Route path="technicians" element={<TechnicianList />} />
        <Route path="models" element={<VehicleModelList />} />
        <Route path="autos" element={<AutomobileList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
