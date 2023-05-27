import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

export default function SalesRecordList() {
  const [sales_record, setSalesRecord] = useState([]);
  const [automobile, setAutomobile] = useState("");
  const [automobiles, setAutomobiles] = useState([]);
  const [salesperson, setSalesperson] = useState("");
  const [salespersons, setSalespersons] = useState([]);
  const [customer, setCustomer] = useState("");
  const [customers, setCustomers] = useState([]);
  const [price, setPrice] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fetchData = async () => {
    const url = "http://localhost:8090/api/salesrecords/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalesRecord(data.sales_record);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  const handleAutomobileChange = (event) => {
    const value = event.target.value;
    setAutomobile(value);
  };
  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };
  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.price = price;
    data.automobile = automobile;
    data.salesperson = salesperson;
    data.customer = customer;

    const salesUrl = "http://localhost:8090/api/salesrecords/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      setPrice("");
      setAutomobile("");
      setSalesperson("");
      setCustomer("");
      fetchAutomobiles();
      fetchData();
      handleFormToggle();
      Swal.fire({
        icon: "success",
        title: "Successfully Created!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const fetchAutomobiles = async () => {
    const url = "http://localhost:8090/api/automobilevo/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.automobiles);
    }
  };
  const fetchAutomobile = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutomobile(data.autos);
    }
  };
  const fetchSalespersons = async () => {
    const url = "http://localhost:8090/api/salespersons/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalespersons(data.salespersons);
    }
  };
  const fetchCustomers = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  };
  useEffect(() => {
    fetchAutomobile();
    fetchAutomobiles();
    fetchSalespersons();
    fetchCustomers();
  }, []);

  return (
    <>
      <div className="pt-16">
        <table className="text-center justify-center table table-striped">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Employee Number</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {sales_record.map((record) => {
              return (
                <tr key={record.id}>
                  <td>{record.salesperson.name}</td>
                  <td>{record.salesperson.employee_number}</td>
                  <td>{record.customer}</td>
                  <td>{record.automobile}</td>
                  <td>${record.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pt-32 text-center">
        {showForm ? (
          <div className="pb-16">
            <button
              className="inline-flex items-center py-2 px-4 text-white font-bold bg-green-500 hover:bg-green-600 rounded"
              onClick={handleFormToggle}
            >
              <IoAddCircleOutline className="mr-2" />
              Close Form
            </button>
            <div className="row">
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Create a Sale Record</h1>
                  <form onSubmit={handleSubmit} id="create-sale-form">
                    <div className="mb-3">
                      <select
                        value={automobile}
                        onChange={handleAutomobileChange}
                        required
                        id="automobile"
                        name="automobile"
                        className="form-select"
                      >
                        <option value="">Choose an Automobile</option>
                        {automobiles.map((automobile) => {
                          if (automobile.sold === false) {
                            return (
                              <option
                                key={automobile.vin}
                                value={automobile.vin}
                              >
                                {automobile.vin}
                              </option>
                            );
                          };
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <select
                        value={salesperson}
                        onChange={handleSalespersonChange}
                        required
                        id="salesperson"
                        name="salesperson"
                        className="form-select"
                      >
                        <option value="">Choose a Sales Person</option>
                        {salespersons.map((salesperson) => {
                          return (
                            <option
                              key={salesperson.name}
                              value={salesperson.name}
                            >
                              {salesperson.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <select
                        value={customer}
                        onChange={handleCustomerChange}
                        required
                        id="customer"
                        name="customer"
                        className="form-select"
                      >
                        <option value="">Choose a Customer</option>
                        {customers.map((customer) => {
                          return (
                            <option key={customer.id} value={customer.name}>
                              {customer.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Price"
                        required
                        type="number"
                        name="price"
                        id="price"
                        className="form-control"
                      />
                      <label htmlFor="price">Sale Price</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="inline-flex items-center py-2 px-4 text-white font-bold bg-green-500 hover:bg-green-600 rounded"
            onClick={handleFormToggle}
          >
            <IoAddCircleOutline className="mr-2" />
            Add Sales Record
          </button>
        )}
      </div>
    </>
  );
}
