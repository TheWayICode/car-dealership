import { React, useState, useEffect } from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from 'sweetalert2';

function TechnicianList() {
    const [technicians, SetTechnicians] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [employee_id, setEmployeeId] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
    }


    const handleFormToggle = () => {
        setShowForm(!showForm);
      };
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        data.employee_id = employee_id;

        const url = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setName('');
            setEmployeeId('');
            fetchData();
            handleFormToggle();
            Swal.fire({
                icon: 'success',
                title: 'Successfully Created!',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    return (
        <div className='min-h-screen overflow-hidden'>
            <div className='pt-16'>
                <table className="text-center justify-center table table-striped">
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
            <div className='pt-32 text-center'>
                {showForm ? (
                    <div className='pb-16'>
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
                                    <h1>Create a new technician</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className='form-floating mb-3'>
                                            <input onChange={handleNameChange} value={name} placeholder='name' required type="text" name="name" id="name" className='form-control'/>
                                            <label htmlFor="name">Employee name</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input onChange={handleEmployeeIdChange} value={employee_id} placeholder='employee_id' required type="text" name="employee_id" id="employee_id" className='form-control'/>
                                            <label htmlFor="employee_id">Employee id</label>
                                        </div>
                                        <button className='btn btn-primary'>Create</button>
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
                    Add Technician
                    </button>
                )}
            </div>
        </div>

    )
}
export default TechnicianList;
