import React, { useState } from 'react';

export default function CustomerForm(props) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhoneNumber] = useState('')

    const handleNameInputChange = (event) => {
        setName(event.target.value);
    };

    const handleAddressInputChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneNumberInputChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.address = address;
        data.phone = phone;

        const Url = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json'}
        }
        const response = await fetch(Url, fetchConfig);
        if (response.ok) {
            setName('');
            setAddress('');
            setPhoneNumber('');
        }
    };


return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Customer</h1>
                    <form onSubmit ={handleSubmit}id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input
                            onChange={handleNameInputChange}
                            value={name}
                            placeholder="name"
                            required type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            onChange={handleAddressInputChange}
                            placeholder="address"
                            required type="text"
                            name="address"
                            id="address"
                            className="form-control"
                            value={address}
                            />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            onChange={handlePhoneNumberInputChange}
                            placeholder="phone"
                            required type="digit"
                            name="phone"
                            id="phone"
                            className="form-control"
                            value={phone}
                            />
                            <label htmlFor="color">Phone Number</label>
                            </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
    </div>
    )
};
