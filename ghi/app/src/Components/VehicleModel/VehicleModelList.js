import { React, useState, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

function VehicleModelList() {
  const [models, SetModels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [manufacturers, setManufacturers] = useState([]);
  const [name, setName] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [manufacturer_id, setManufacturer] = useState("");

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handlePictureUrlChange = (event) => {
    const value = event.target.value;
    setPictureUrl(value);
  };
  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };
  const fetchManufacturers = async () => {
    const response = await fetch("http://localhost:8100/api/manufacturers/");
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };
  useEffect(() => {
    fetchManufacturers();
  }, []);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      SetModels(data.models);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    data.picture_url = picture_url;
    data.manufacturer_id = manufacturer_id;

    const url = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setName("");
      setPictureUrl("");
      setManufacturer("");
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
      <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
        {models.map((model) => (
          <div key={model.id} className="bg-white shadow-md shadow-gray-200 rounded p-4 hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-center">
              {model.manufacturer.name}&nbsp;{model.name}
            </h3>
            <div className="h-48 bg-[#C4DDFF] text-center font-bold relative">
              <div className="h-full w-full overflow-hidden">
                <img
                  src={model.picture_url}
                  className="object-cover h-full w-full"
                  alt="car"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="pt-32 pb-16 text-center">
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
                  <h1 className="text-xl pb-4">Create new vehicle model</h1>
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
                    <div className="form-floating mb-3">
                      <input
                        onChange={handlePictureUrlChange}
                        value={picture_url}
                        placeholder="picture_url"
                        required
                        type="url"
                        name="picture_url"
                        id="picture_url"
                        className="form-control"
                      />
                      <label htmlFor="picture_url">Picture url</label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        onChange={handleManufacturerChange}
                        value={manufacturer_id}
                        name="manufacturer_id"
                        id="manufacturer_id"
                        className="form-select"
                      >
                        <option value="">Choose your manufacturer</option>
                        {manufacturers.map((manufacturer) => {
                          return (
                            <option
                              key={manufacturer.id}
                              value={manufacturer.id}
                            >
                              {manufacturer.name}
                            </option>
                          );
                        })}
                      </select>
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
            Add Vehicle Model
          </button>
        )}
      </div>
    </div>
  );
}
export default VehicleModelList;
