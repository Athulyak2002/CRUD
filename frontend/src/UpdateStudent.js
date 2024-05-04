import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [EmployeeCode, setEmployeeCode] = useState('');
    const [Emailid, setEmailid] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [Department, setDepartment] = useState('');

    const { id } = useParams(); // Corrected syntax for destructuring id from useParams

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put("http://localhost:3000/update/"+id, { FirstName, LastName, EmployeeCode, Emailid, ContactNumber, Department })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update student</h2>
                    <div className='mb-6'>
                        <label htmlFor=''>First Name</label>
                        <input type='text' placeholder='Enter first name' className='form-control'
                            value={FirstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor=''>Last Name</label>
                        <input type='text' placeholder='Enter last name' className='form-control'
                            value={LastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor=''>Employee Code</label>
                        <input type='text' placeholder='Enter employee code' className='form-control'
                            value={EmployeeCode} onChange={e => setEmployeeCode(e.target.value)} />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor=''>Email id</label>
                        <input type='text' placeholder='Enter email id' className='form-control'
                            value={Emailid} onChange={e => setEmailid(e.target.value)} />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor=''>Contact Number</label>
                        <input type='number' placeholder='Enter contact number' className='form-control'
                            value={ContactNumber} onChange={e => setContactNumber(e.target.value)} />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor=''>Department</label>
                        <input type='text' placeholder='Enter department' className='form-control'
                            value={Department} onChange={e => setDepartment(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateStudent;
