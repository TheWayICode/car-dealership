import { React, useState } from 'react';

function TechnicianForm() {

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        data.employee_id = employee_id;
        console.log(data);

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
            const newTech = await response.json();
            console.log(newTech)
            setName('');
            setEmployeeId('');
        }
    }

    return (
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
    )
}
export default TechnicianForm;
