import { React, useState, useEffect } from 'react';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [vins, setVins] = useState([]);

    const deleteAppointment = async(id) => {
        const url = `http://localhost:8080/api/appointments/${id}`;
        const response = await fetch(url, {method:"delete"})
        if (response.ok) {
            window.location.reload()
        }
    }
    const finishAppointment = async(id) => {
        const url = `http://localhost:8080/api/appointments/${id}`;
        const response = await fetch(url, {method:"delete"})
        if (response.ok) {
            window.location.reload()
        }
    }

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        }
    }
    useEffect(() => {
        fetchData();
        }, []);


    const fetchAutoData = async () => {
        const response = await fetch("http://localhost:8100/api/automobiles/");
        if (response.ok) {
            const data = await response.json();
            setVins(data.autos)
        }
    }
    useEffect(() => {
        fetchAutoData();
        }, []);


    return (
        <div>
            <br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Customer Name</th>
                        <th>Date and Time</th>
                        <th>Reason for Service</th>
                        <th>Assigned Technician Name</th>
                        <th>VIP</th>
                        <th>Cancel</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{ appointment.vin.vin }</td>
                                <td>{ appointment.name }</td>
                                <td>{ new Date (appointment.date_time).toLocaleString() }</td>
                                <td>{ appointment.reason }</td>
                                <td>{ appointment.technician.name }</td>
                                <td>{ appointment.vip ? "Yes": "No" }</td>
                                <td><button onClick={() => deleteAppointment(appointment.id)} className="btn btn-danger">Cancel</button></td>
                                <td><button onClick={() => finishAppointment(appointment.id)} className="btn btn-success">Finished</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AppointmentList;
