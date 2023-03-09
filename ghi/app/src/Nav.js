import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sales Information
            </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" aria-current="page" to="employee/add/">Add Sales Person</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="salesrecord/add/">Create a Sale Record</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="salesrecord/">List of All Sales</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="salesemployee/">List Sales History by Sales Person</NavLink>
                </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Customer Information
            </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" aria-current="page" to="customer/add/">Add a Customer</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/customers/">Customer List</NavLink>
                </ul>
              </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Appointments</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" aria-current="page" to="/appointments">Appointments List</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="appointments/new/">Create new Appointment</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/servicehistory">Service History</NavLink>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Technicians</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" aria-current="page" to="/technicians">Technicians List</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="technicians/new/">Create new Technician</NavLink>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manufacturers</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" aria-current="page" to="/manufacturers">Manufacturers List</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers/new/">Create new Manufacturer</NavLink>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Automobile Models</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" aria-current="page" to="/models">Automobile Models List</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="models/new/">Create new Automobile Model</NavLink>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Automobiles</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" aria-current="page" to="/autos">Automobiles List</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="autos/new/">Create new Automobile</NavLink>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
