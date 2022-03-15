import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './newstudent.scss'
import useFetch from '../../Hooks/useFetch';
const NewStudent = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [ack, setack] = useState();
    const { loading, error, data } = useFetch('http://localhost:5000/api/university/all');

    if (data)
        console.log(data.university);
    if (loading) {
        return <p>Loading....</p>
    }
    if (error) {
        return <p>Error....</p>
    }

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
                <div className="row2" >
                    {/* <input type="text" required {...register('university')} onClick={handleClick} placeholder='University' />
                    <ArrowDropDownIcon className='drop-icon'/>
                    <div className="menu" style = {{display: {show}}}>
                        <p>CASE</p>
                        <p>CASE</p>
                        <p>CASE</p>
                        <p>CASE</p>
                        <p>CASE</p>
                    </div> */}
                        <select {...register('university')}>
                            <option value="0">Select University</option>
                            {
                                data && data.university.map(i=>{
                                    return(
                                        <option key = {i._id}value={i.name}>{i.name}</option>
                                    )
                                })
                            }
                            {/* <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                            <option value="5">Honda</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                            <option value="8">Mercedes</option>
                            <option value="9">Mini</option>
                            <option value="10">Nissan</option>
                            <option value="11">Toyota</option>
                            <option value="12">Volvo</option> */}
    </select>
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
