import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordList from './SalesRecordList';
import SalesHistory from './SalesRecordHistory';





import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import ServiceHistory from './ServiceHistory';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="employee/add/" element={<SalesPersonForm />} />
          <Route path="/customers/" element={<CustomerList />} />
          <Route path="customer/add/" element={<CustomerForm />} />
          <Route path="salesrecord/add/" element={<SalesRecordForm />} />
          <Route path="salesrecord/" element={<SalesRecordList />} />
          <Route path="salesemployee/" element={<SalesHistory />} />
          <Route path="appointments">
            <Route index element={<AppointmentList appointments={props.appointments}/>} />
            <Route path="new" element={<AppointmentForm/>}/>
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianList technicians={props.technicians}/>} />
            <Route path="new" element={<TechnicianForm/>}/>
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufactuers={props.manufactuers}/>} />
            <Route path='new' element={<ManufacturerForm/>}/>
          </Route>
          <Route path="models">
            <Route index element={<VehicleModelList models={props.models}/>} />
            <Route path='new' element={<VehicleModelForm/>}/>
          </Route>
          <Route path="autos">
            <Route index element={<AutomobileList autos={props.autos}/>} />
            <Route path='new' element={<AutomobileForm/>}/>
          </Route>
          <Route path="servicehistory" element={<ServiceHistory/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
