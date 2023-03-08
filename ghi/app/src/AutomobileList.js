import { React, useState, useEffect } from 'react';

function AutomobileList() {
    const [autos, SetAutos] = useState([]);
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


    return (
        <div>
            <br/>
            <table className="table table-striped">
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

    )
}
export default AutomobileList;
