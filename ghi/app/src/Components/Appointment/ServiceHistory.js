import React, { useEffect, useState } from 'react';

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState('')

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    const fetchData = async () => {
      const url = 'http://localhost:8080/api/appointments/';
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments)
      }
    }
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='text-center'>
            <h3 className="pt-16 pb-4 text-center text-2xl font-bold">Service History</h3>
            <div className="px-8 input-group pb-8">
                <input onChange={handleSearchChange} value={search} type="search" className="form-control rounded" placeholder="Search VIN number" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-primary">Search</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer name</th>
                        <th>Date & Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.filter(appointment => appointment.vin.vin === search).map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin.vin}</td>
                                <td>{appointment.name}</td>
                                <td>{new Date (appointment.date_time).toLocaleString()}</td>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.reason}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
      </div>
    )
}
export default ServiceHistory;
