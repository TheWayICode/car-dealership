import React, { useState, useEffect } from "react";

export default function SalesRecordHistory() {
  const [salespersons, setSalespersons] = useState([]);
  const [sales_record, setSales] = useState([]);
  const [name, setName] = useState("");

  const fetchSalesData = async () => {
    const salesUrl = "http://localhost:8090/api/salesrecords/";
    const response = await fetch(salesUrl);
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales_record);
    }
  };
  const fetchSalespersonData = async () => {
    const salespersonUrl = "http://localhost:8090/api/salespersons/";
    const response = await fetch(salespersonUrl);
    if (response.ok) {
      const data = await response.json();
      setSalespersons(data.salespersons);
    }
  };
  useEffect(() => {
    fetchSalesData();
    fetchSalespersonData();
  }, []);

  const handleSalespersonChange = async (event) => {
    const value = event.target.value;
    setName(value);
  };
  if (salespersons === undefined) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="pt-16 pb-8 px-8">
        <select
          className="form-select"
          onChange={handleSalespersonChange}
          value={name}
          name="name"
          required
          id="name"
        >
          <option value="">Select Sales Person</option>
          {salespersons.map((saleperson) => {
            return (
              <option key={saleperson.id} value={saleperson.name}>
                {saleperson.name}
              </option>
            );
          })}
        </select>
      </div>
      <table className="text-center justify-center table table-striped">
        <thead>
          <tr>
            <th>Sales Person</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {sales_record
            .filter((sales_record) => sales_record.salesperson.name === name)
            .map((sales_record) => {
              return (
                <tr key={sales_record.id}>
                  <td>{sales_record.salesperson.name}</td>
                  <td>{sales_record.customer}</td>
                  <td>{sales_record.automobile}</td>
                  <td>${sales_record.price.toLocaleString()}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
