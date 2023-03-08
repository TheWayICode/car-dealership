import { React, useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


function AppointmentForm() {
    const [vins, setVins] = useState([]);
    const [technicians, setTechnicians] = useState([]);
    const [vin, setVin] = useState('');
    const [name, setName] = useState('');
    const [date_time, setDateTime] = useState('');
    const [reason, setReason] = useState('');
    const [technician, setTechnician] = useState('');

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value);
    }
    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }
    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.vin = vin;
        data.name = name;
        data.date_time = date_time;
        data.reason = reason;
        data.technician = technician;
        console.log(data);

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
            const newAppt = await response.json();
            console.log(newAppt)
            setVin('');
            setName('');
            setDateTime('');
            setReason('');
            setTechnician('');
        }
        navigate('/appointments', {replace: true});
    }


    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/technicians/");
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    }
    useEffect(() => {
        fetchData();
        }, []);


    const fetchServiceAutoData = async () => {
        const response = await fetch("http://localhost:8100/api/automobiles/");
        if (response.ok) {
            const data = await response.json();
            setVins(data.autos)
        }
    }
    useEffect(() => {
        fetchServiceAutoData();
        }, []);

    const navigate = useNavigate();


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new appointment</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-floating mb-3'>
                            <input onChange={handleVinChange} value={vin} placeholder='vin' required type="text" name="vin" id="vin" className='form-control'/>
                            <label htmlFor="vin">Vin number</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleNameChange} value={name} placeholder='name' required type="text" name="name" id="name" className='form-control'/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleDateTimeChange} value={date_time} placeholder='date_time' required type="datetime-local" name="date_time" id="date_time" className='form-control'/>
                            <label htmlFor="date_time">Date and time of appointment</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleReasonChange} value={reason} placeholder='reason' required type="text" name="reason" id="reason" className='form-control'/>
                            <label htmlFor='reason'>Reason for appointment</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <select onChange={handleTechnicianChange} value={technician} name="technician" id="technician" className='form-select'>
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
                        <button className='btn btn-primary'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AppointmentForm;
