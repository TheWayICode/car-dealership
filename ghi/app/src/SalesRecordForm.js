import React, { useState, useEffect } from 'react'

export default function SalesRecordForm() {
    const [automobile, setAutomobile] = useState('')
    const [automobiles, setAutomobiles] = useState([])
    const [salesperson, setSalesperson] = useState('')
    const [salespersons, setSalespersons] = useState([])
    const [customer, setCustomer] = useState('')
    const [customers, setCustomers] = useState([])
    const [price, setPrice] = useState('')


    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }
    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.price = price
        data.automobile = automobile
        data.salesperson = salesperson
        data.customer = customer

        const salesUrl = "http://localhost:8090/api/salesrecords/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(salesUrl, fetchConfig)
        if (response.ok) {
            setPrice('')
            setAutomobile('')
            setSalesperson('')
            setCustomer('')
            fetchAutomobiles()

        }
    }
        const fetchAutomobiles = async () => {
            const url = 'http://localhost:8090/api/automobilevo/';
            const response = await fetch(url);
            if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.automobiles)
            }
        }
        const fetchAutomobile = async () => {
            const url = "http://localhost:8100/api/automobiles/";
            const response = await fetch(url);
            if (response.ok) {
            const data = await response.json();
            setAutomobile(data.autos)
            }
        }
        const fetchSalespersons = async () => {
            const url = 'http://localhost:8090/api/salespersons/';
            const response = await fetch(url);
            if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salespersons)
            }
        }
        const fetchCustomers = async () => {
            const url = 'http://localhost:8090/api/customers/';
            const response = await fetch(url);
            if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers)
            }
        }

useEffect(() => {
    fetchAutomobile()
    fetchAutomobiles()
    fetchSalespersons()
    fetchCustomers()
    }, []);

return (
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a Sale Record</h1>
            <form onSubmit={handleSubmit} id="create-sale-form">
                <div className="mb-3">
                    <select
                    value={automobile}
                    onChange={handleAutomobileChange}
                    required id="automobile"
                    name="automobile" className="form-select">
                        <option
                        value=''>Choose an Automobile</option>
                        {automobiles.map((automobile) => {
                            if (automobile.sold === false) {
                                return (
                                    <option key={automobile.vin} value={automobile.vin}>
                                        {automobile.vin}
                                    </option>
                                )
                            }
                        ;
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <select
                    value={salesperson}
                    onChange={handleSalespersonChange}
                    required
                    id="salesperson"
                    name="salesperson"
                    className="form-select">
                        <option value=''>Choose a Sales Person</option>
                        {salespersons.map(salesperson => {
                            return (
                                <option key={salesperson.name} value={salesperson.name}>
                                    {salesperson.name}
                                </option>
                        );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <select
                    value={customer}
                    onChange={handleCustomerChange}
                    required
                    id="customer"
                    name="customer"
                    className="form-select">
                        <option
                        value=''>Choose a Customer</option>
                        {customers.map(customer => {
                            return (
                                <option key={customer.id} value={customer.name}>
                                    {customer.name}
                                </option>
                        );
                        })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="Price"
                    required
                    type="number"
                    name="price"
                    id="price"
                    className="form-control" />
                    <label htmlFor="price">Sale Price</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
)
}
