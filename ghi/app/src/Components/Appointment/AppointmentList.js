import { React, useState, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

function AppointmentList() {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [setVins] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [vin, setVin] = useState("");
  const [name, setName] = useState("");
  const [date_time, setDateTime] = useState("");
  const [reason, setReason] = useState("");
  const [technician, setTechnician] = useState("");

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleDateTimeChange = (event) => {
    const value = event.target.value;
    setDateTime(value);
  };
  const handleReasonChange = (event) => {
    const value = event.target.value;
    setReason(value);
  };
  const handleTechnicianChange = (event) => {
    const value = event.target.value;
    setTechnician(value);
  };
  const deleteAppointment = async (id) => {
    const url = `http://localhost:8080/api/appointments/${id}`;
    const response = await fetch(url, { method: "delete" });
    if (response.ok) {
      fetchData();
    }
  };
  const finishAppointment = async (id) => {
    const url = `http://localhost:8080/api/appointments/${id}`;
    const response = await fetch(url, { method: "delete" });
    if (response.ok) {
      fetchData();
    }
  };
  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchAutoData = async () => {
    const response = await fetch("http://localhost:8100/api/automobiles/");
    if (response.ok) {
      const data = await response.json();
      setVins(data.vins);
    }
  };
  useEffect(() => {
    fetchAutoData();
  }, []);
  const fetchTech = async () => {
    const response = await fetch("http://localhost:8080/api/technicians/");
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  };
  useEffect(() => {
    fetchTech();
  }, []);
  const fetchServiceAutoData = async () => {
    const response = await fetch("http://localhost:8100/api/automobiles/");
    if (response.ok) {
      const data = await response.json();
      setVins(data.autos);
    }
  };
  useEffect(() => {
    fetchServiceAutoData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.vin = vin;
    data.name = name;
    data.date_time = date_time;
    data.reason = reason;
    data.technician = technician;

    const appointmentUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
      setVin("");
      setName("");
      setDateTime("");
      setReason("");
      setTechnician("");
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
      <div className="text-center pt-16">
        <table className="text-center justify-center table table-striped">
          <thead>
            <tr className="">
              <th>Vin</th>
              <th>Customer Name</th>
              <th>Date & Time</th>
              <th>Reason for Service</th>
              <th>Technician Name</th>
              <th>Cancel</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin.vin}</td>
                  <td>{appointment.name}</td>
                  <td>{new Date(appointment.date_time).toLocaleString()}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.technician.name}</td>
                  <td>
                    <button
                      onClick={() => deleteAppointment(appointment.id)}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => finishAppointment(appointment.id)}
                      className="btn btn-success"
                    >
                      Finished
                    </button>
                  </td>
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
                  <h1 className="pb-4 text-xl">Schedule new appointment</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        onChange={handleVinChange}
                        value={vin}
                        placeholder="vin"
                        required
                        type="text"
                        name="vin"
                        id="vin"
                        className="form-control"
                      />
                      <label htmlFor="vin">Vin number</label>
                    </div>
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
                        onChange={handleDateTimeChange}
                        value={date_time}
                        placeholder="date_time"
                        required
                        type="datetime-local"
                        name="date_time"
                        id="date_time"
                        className="form-control text-sm"
                      />
                      <label htmlFor="date_time">
                        Schedule Date & Time for Appointment
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={handleReasonChange}
                        value={reason}
                        placeholder="reason"
                        required
                        type="text"
                        name="reason"
                        id="reason"
                        className="form-control"
                      />
                      <label htmlFor="reason">Reason for Appointment</label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        onChange={handleTechnicianChange}
                        value={technician}
                        name="technician"
                        id="technician"
                        className="form-select"
                      >
                        <option value="">Choose your technician</option>
                        {technicians.map((technician) => {
                          return (
                            <option key={technician.id} value={technician.id}>
                              {technician.name}
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
            Add Appointment
          </button>
        )}
      </div>
    </div>
  );
}
export default AppointmentList;
