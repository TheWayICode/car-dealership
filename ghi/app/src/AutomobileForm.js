import { React, useState, useEffect } from 'react';

function AutomobileForm() {

    const [models, setModels] = useState([]);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model_id, setModel] = useState('');

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
            const newModel = await response.json();
            setColor('');
            setYear('');
            setVin('')
            setModel('')
        }
    }

    const fetchData = async () => {
        const response = await fetch("http://localhost:8100/api/models/");
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }
    useEffect(() => {
        fetchData();
        }, []);


    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Automobile</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-floating mb-3'>
                        <input onChange={handleColorChange} value={color} placeholder='color' required type="text" name="color" id="color" className='form-control'/>
                        <label htmlFor="color">Automobile color</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input onChange={handleYearChange} value={year} placeholder='year' required type="year" name="year" id="year" className='form-control'/>
                        <label htmlFor="year">Automobile year</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input onChange={handleVinChange} value={vin} placeholder='vin' required type="text" name="vin" id="vin" className='form-control'/>
                        <label htmlFor="vin">Automobile vin</label>
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
    )
}
export default AutomobileForm;
