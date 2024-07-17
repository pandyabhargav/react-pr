import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import generateUniqueId from 'generate-unique-id';
import { useDispatch } from 'react-redux';
import { addStu } from '../Services/Action/Action';
import { Container } from 'react-bootstrap';

function Add() {
    const [inputText, setInputText] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        address: '',
        con: ''
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value

        setInputText({ ...inputText, [name]: value });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        let obj = {
            ...inputText
        }

        obj.id = generateUniqueId({
            length: 5,
            useLetters: false
        });

        dispatch(addStu(obj));

        setInputText({

            id: '',
            fname: '',
            lname: '',
            email: '',
            address: '',
            con: ''

        });

        navigate('/viewData');

    };

    return (
        <Container fluid>
            <section className="new-employee col-12 p-5">
                <h2>Add New Reservation</h2>
                <div className='d-flex justify-content-strat p-5'>
                    <form onSubmit={handleSubmit} className='col-5'>
                        <div className="mb-3 ">
                            <label htmlFor="first-name" className="form-label">First Name:</label>
                            <input type="text" className="form-control" id="first-name" name='fname' value={inputText.fname} onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="last-name" className="form-label">Last Name:</label>
                            <input type="text" className="form-control" id="last-name" name='lname' value={inputText.lname} onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name='email' value={inputText.email} onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input type="text" className="form-control" id="address" name='address' value={inputText.address} onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone:</label>
                            <input type="tel" className="form-control" id="phone" name='con' value={inputText.con} onChange={handleInput} />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Reservation</button>
                    </form>
                </div>
            </section>
        </Container>
    );
}

export default Add;
