import React, {useState} from 'react';

export default function Employee() {
    const [name, setName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');

    const handleNameInputChange = (event) => {
        setName(event.target.value);
    };

    const handleEmployeeNumberInputChange = (event) => {
        setEmployeeNumber(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        data.employee_number = employeeNumber;

        const url = 'http://localhost:8090/api/salespersons/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/'}
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setName('');
            setEmployeeNumber('');

        };
    }

    return (
        <div className="container pt-16 min-h-screen overflow-hidden">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1 className='text-2xl pb-4 text-center'>Add a sales person</h1>
                        <form onSubmit ={handleSubmit} id="create-sale-person-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleNameInputChange} placeholder="name" required type="text" name="name" id="name" className="form-control" value={name}/>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleEmployeeNumberInputChange}placeholder="employee_number" required type="number" name="employee_number" id="employee_number" className="form-control" value={employeeNumber}/>
                                <label htmlFor="employee_number">Employee Number</label>
                            </div>
                            <div className='flex justify-center'>
                                <button className="btn btn-success">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
)
}
