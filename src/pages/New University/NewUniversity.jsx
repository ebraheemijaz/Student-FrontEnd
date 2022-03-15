import React from 'react'
import './newuniversity.scss'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const NewUniversity = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    return (
        <div className='newuniversity'>
            <h3 className="title">Add University</h3>
            <form autoComplete='off' onSubmit={handleSubmit((data) => {
                console.log(data);


                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                };
                fetch('http://localhost:5000/api/university/add', requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data));

                alert('Form Submitted');
                navigate('/', { replace: true })


            })}>
                <div className="row1">
                    <input type="text" required {...register('name')} placeholder='University Name' />
                </div>
                <div className="row2">
                    <input type="text" required {...register('city')} placeholder='City' />
                    <input type="text" required {...register('postaladdress')} placeholder='Postal Address' />
                    <input type="text" required {...register('country')} placeholder='Country' />
                </div>
                <div className="row3">
                    <input type="text" required {...register('address')} placeholder='Address' />
                </div>

                <div className="row4">
                    <input type="submit" value='Create' />
                </div>



            </form>
        </div>
    )
}

export default NewUniversity
