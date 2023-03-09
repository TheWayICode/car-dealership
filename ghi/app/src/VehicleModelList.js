import { React, useState, useEffect } from 'react';

function VehicleModelList() {
    const [models, SetModels] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            SetModels(data.models)
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
                        <th>Vehicle model name</th>
                        <th>Picture</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(model => {
                        return (
                            <tr key={model.id}>
                                <td>{ model.name }</td>
                                <td><img src={ model.picture_url } width="100" height="75" alt="car"/></td>
                                <td>{ model.manufacturer.name } </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>

    )
}
export default VehicleModelList;
