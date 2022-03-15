import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './newstudent.scss'
const NewStudent = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [ack, setack] = useState();
    return (
        <div className='newstudent'>
            <h3 className="title">Add New Student</h3>

            <form autoComplete='off' onSubmit={handleSubmit((data) => {
                console.log(data);

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                };
                fetch('http://localhost:5000/api/student/add', requestOptions)
                    .then(response => response.json())
                    .then(data => setack(data));

                alert('Form Submitted');
                navigate('/', { replace: true })

            })}>
                <div className="row1">
                    <input type="text" required {...register('firstname')} placeholder='First Name' />
                    <input type="text" required {...register('lastname')} placeholder='Last Name' />
                </div>
                <div className="row2">
                    <input type="text" required {...register('university')} placeholder='University' />
                </div>
                <div className="row3">
                    <input type="number" step="any" {...register('gpa')} placeholder='GPA' />
                    <input type="number" required {...register('year')} placeholder='Year' />
                </div>
                <div className="row4">
                    <input type="text" required {...register('city')} placeholder='City' />
                    <input type="text" required {...register('country')} placeholder='Country' />
                </div>
                <div className="row5">
                    <textarea {...register('addinfo')} name="addinfo" id="info" cols="30" rows="10" placeholder='Additional Information'></textarea>

                </div>
                <div className="submit">

                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default NewStudent
