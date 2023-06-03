import { React, useState, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;

    const url = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setName("");
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
    <div className="min-h-screen overflow-hidden">
      <div className="pt-16">
        <div className="font-semibold text-center grid grid-cols-4 gap-6 justify-center lg:px-32 md:px-24 sm:px-16 px-8">
          {manufacturers.map((manufacturer) => (
            <div key={manufacturer.id} className="bg-gray-100 p-4 rounded hover:scale-105 shadow-md shadow-gray-200">
              {manufacturer.name}
            </div>
          ))}
        </div>
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
              <div className="offset-3 col-6 text-center">
                <div className="shadow p-4 mt-4">
                  <h1 className="text-xl pb-4">Create new manufacturer</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        onChange={handleNameChange}
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
                    <div className="flex justify-center">
                      <button className="btn btn-primary text-center">
                        Create
                      </button>
                    </div>
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
            Add Manufacturer
          </button>
        )}
      </div>
    </div>
  );
}
export default ManufacturerList;
