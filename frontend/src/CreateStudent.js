import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
    const [FirstName,setFirstName]=useState('')
    const [LastName,setLastName]=useState('')
    const [EmployeeCode,setEmployeeCode]=useState('')
    const [Emailid,setEmailid]=useState('')
    const [ContactNumber,setContactNumber]=useState('')
    const [Department,setDepartment]=useState('')


    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/create',{FirstName,LastName,EmployeeCode,Emailid,ContactNumber,Department})
        .then (res=>{
            console.log(res);
            navigate('/');
        }).catch(err=> console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add student</h2>
                <div className='mb-6'>
                    <label htmlFor=''>First Name</label>
                    <input type='text' placeholder='enter first name' className='form-control'
                    onChange={e=> setFirstName(e.target.value)}/>
                </div>
                <div className='mb-6'>
                    <label htmlFor=''>Last Name</label>
                    <input type='text' placeholder='enter last name' className='form-control'
                     onChange={e=> setLastName(e.target.value)}/>
                </div>
                <div className='mb-6'>
                    <label htmlFor=''>Employee Code</label>
                    <input type='text' placeholder='enter employee code' className='form-control'
                     onChange={e=> setEmployeeCode(e.target.value)}/>
                </div>
                <div className='mb-6'>
                    <label htmlFor=''>Email id</label>
                    <input type='text' placeholder='enter emailid' className='form-control'
                     onChange={e=> setEmailid(e.target.value)}/>
                </div>
                <div className='mb-6'>
                    <label htmlFor=''>Contact Number</label>
                    <input type='number' placeholder='enter contact number' className='form-control'
                     onChange={e=> setContactNumber(e.target.value)}/>
                </div>
                <div className='mb-6'>
                    <label htmlFor=''>Department</label>
                    <input type='text' placeholder='enter department' className='form-control'
                     onChange={e=> setDepartment(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default CreateStudent;
