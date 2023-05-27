import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

export default function CustomerList() {
  const [customers, SetCustomers] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressInputChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneNumberInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const fetchData = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      SetCustomers(data.customers);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = name;
    data.address = address;
    data.phone = phone;

    const Url = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    };
    const response = await fetch(Url, fetchConfig);
    if (response.ok) {
      setName("");
      setAddress("");
      setPhoneNumber("");
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

  return (
    <>
      <div className="pt-16">
        <table className="text-center justify-center table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr className="table-row" key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone}</td>
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
                  <h1>Add a Customer</h1>
                  <form onSubmit={handleSubmit} id="create-customer-form">
                    <div className="form-floating mb-3">
                      <input
                        onChange={handleNameInputChange}
                        value={name}
                        placeholder="name"
                        required
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={handleAddressInputChange}
                        placeholder="address"
                        required
                        type="text"
                        name="address"
                        id="address"
                        className="form-control"
                        value={address}
                      />
                      <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={handlePhoneNumberInputChange}
                        placeholder="phone"
                        required
                        type="digit"
                        name="phone"
                        id="phone"
                        className="form-control"
                        value={phone}
                      />
                      <label htmlFor="color">Phone Number</label>
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
            Add Customer
          </button>
        )}
      </div>
    </>
  );
}
