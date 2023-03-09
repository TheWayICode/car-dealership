import React, {useEffect, useState } from "react";

export default function CustomerList() {

    const[customers, SetCustomers] = useState([]);
    const fetchData = async () => {
    const url = 'http://localhost:8090/api/customers/';
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        SetCustomers(data.customers);
    }
}

useEffect(() => {
    fetchData();
}, []);

return (
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            {customers.map((customer) => {
                    return (
                        <tr className="table-row" key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone}</td>
                        </tr>
                        )
                    })}
        </tbody>
    </table>
);
};
