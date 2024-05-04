import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Student = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/")
            .then(res => {
                if (Array.isArray(res.data)) {
                    setStudents(res.data);
                } else {
                    console.log("API response is not an array:", res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:3000/student/" + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Employee code</th>
                            <th>Email id</th>
                            <th>Contact Number</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(students) && students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.FirstName}</td>
                                <td>{student.LastName}</td>
                                <td>{student.Employeeid}</td>
                                <td>{student.Emailid}</td>
                                <td>{student.contactnumber}</td>
                                <td>{student.Department}</td>
                                <td>
                                    <Link to={`update/${student.id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Student;
