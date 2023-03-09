import { useEffect, useState } from 'react';

export default function SalesRecordList() {

    const [sales_record, setSalesRecord] = useState([]);
    const fetchData = async () => {
    const url = 'http://localhost:8090/api/salesrecords/';
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setSalesRecord(data.sales_record);
    }
};

useEffect(() => {
    fetchData();
}, []);

return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Sales Person</th>
                <th>Employee Number</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Sale Price</th>
                </tr>
            </thead>
            <tbody>
                {sales_record.map((sales_record) => {
                return (
                    <tr key={sales_record.id}>
                    <td>{sales_record.salesperson.name}</td>
                    <td>{sales_record.salesperson.employee_number}</td>
                    <td>{sales_record.customer}</td>
                    <td>{sales_record.automobile}</td>
                    <td>${sales_record.price}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    )
}
