import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStu,singleStu } from '../Services/Action/Action';

function ManageEmployees() {

    const { Customers, Customer } = useSelector(state => state.studentReducer)

    const dispatch = useDispatch();

    console.log('student', Customer);

    const navigate = useNavigate();

    const handleDelete = (id) => {

        dispatch(deleteStu(id));


    }

    

    const handleEdit = (id) => {

        dispatch(singleStu(id));

        navigate('/editData')
    }

 

    return (
        <section className="manage-employees">
            <h2>Manage Hotel</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Customers.map((data, index) => (
                        <tr key={data.id}>
                            <td>{index + 1}</td>
                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>
                            <td>{data.con}</td>
                            <td>
                                <button className="btn btn-success me-2" onClick={() => handleEdit(data.id)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ManageEmployees;
