import { React, useState, useEffect } from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from 'sweetalert2';

function AutomobileList() {
    const [autos, SetAutos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [models, setModels] = useState([]);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model_id, setModel] = useState('');

    const handleFormToggle = () => {
        setShowForm(!showForm);
      };
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }
    const fetchData = async () => {
        const url = "http://localhost:8100/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            SetAutos(data.autos)
        }
    }
    useEffect(() => {
        fetchData();
        }, []);
    const fetchModel = async () => {
        const response = await fetch("http://localhost:8100/api/models/");
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }
    useEffect(() => {
        fetchModel();
        }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model_id;

        const url = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setColor('');
            setYear('');
            setVin('');
            setModel('');
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
                            <th>Vehicle color</th>
                            <th>Vehicle year</th>
                            <th>Vehicle vin</th>
                            <th>Vehicle model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autos.map(auto => {
                            return (
                                <tr key={auto.id}>
                                    <td>{ auto.color }</td>
                                    <td>{ auto.year }</td>
                                    <td>{ auto.vin }</td>
                                    <td>{ auto.model.name }</td>
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
                            <div className="offset-3 col-6 text-center">
                                <div className="shadow p-4 mt-4">
                                    <h1 className='text-xl pb-4'>Create new automobile</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className='form-floating mb-3'>
                                            <input onChange={handleColorChange} value={color} placeholder='color' required type="text" name="color" id="color" className='form-control'/>
                                            <label htmlFor="color">Color</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input onChange={handleYearChange} value={year} placeholder='year' required type="year" name="year" id="year" className='form-control'/>
                                            <label htmlFor="year">Year</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input onChange={handleVinChange} value={vin} placeholder='vin' required type="text" name="vin" id="vin" className='form-control'/>
                                            <label htmlFor="vin">Vin Number</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                        <select onChange={handleModelChange} value={model_id} name="model_id" id="model_id" className='form-select'>
                                                <option value="">Choose your model</option>
                                                {models.map((model) => {
                                                    return (
                                                        <option key={model.id} value={model.id}>
                                                            {model.name}
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
                    </div>
                ) : (
                    <button
                    className="inline-flex items-center py-2 px-4 text-white font-bold bg-green-500 hover:bg-green-600 rounded"
                    onClick={handleFormToggle}
                    >
                    <IoAddCircleOutline className="mr-2" />
                    Add Automobile
                    </button>
                )}
            </div>
        </div>

    )
}
export default AutomobileList;
