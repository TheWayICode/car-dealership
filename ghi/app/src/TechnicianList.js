import { React, useState, useEffect } from 'react';

function TechnicianList() {
    const [technicians, SetTechnicians] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            SetTechnicians(data.technicians)
        }
    }
    useEffect(() => {
        fetchData();
        }, []);


    return (
        <div>
            <br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee Id</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return (
                            <tr key={technician.id}>
                                <td>{ technician.name }</td>
                                <td>{ technician.employee_id }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>

    )
}
export default TechnicianList;
