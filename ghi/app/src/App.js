import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordList from './SalesRecordList';
import SalesHistory from './SalesRecordHistory';






function App() {
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
