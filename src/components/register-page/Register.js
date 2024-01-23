import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { createUsersApi, crendenUserErrorApi } from '../../redux/actions/actionsUser';
import { registerValidation } from './registerValidation';
import { ErrorBox } from '../error-box/ErrorBox';

export const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.users.error);

    const [formValue, setFormValue] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: '',
        reppass: '',
        image: '',
        posts: [],
        id: uuidv4(),
    });



    const handleChange = (e) => {
        setFormValue((oldValue) => ({
            ...oldValue,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = registerValidation(formValue);


        if (Object.values(errors).length === 0) {
            dispatch(createUsersApi(formValue, navigate));
        } else {
            dispatch(crendenUserErrorApi(errors));
        }
    };

    return (
        <>
 

            {error !== null && typeof error === "object" && Object.keys(error).map((key) => (
                error[key] && <ErrorBox key={key} error={error[key]} />
            )) } 

            {typeof error === "string" && <ErrorBox error={error}/>}


            <section className='formPage'>
                <div className='formWrapper'>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='first name' name='fName'
                            onChange={handleChange} value={formValue.fName} />
                        <input type="text" placeholder='last name' name='lName'
                            onChange={handleChange} value={formValue.lName} />
                        <input type="text" placeholder='email' name='email'
                            onChange={handleChange} value={formValue.email} />
                        <input type="text" placeholder='username' name='username'
                            onChange={handleChange} value={formValue.username} />
                        <input type="password" placeholder='password' name='password'
                            onChange={handleChange} value={formValue.password} />
                        <input type="password" placeholder='reppass' name='reppass'
                            onChange={handleChange} value={formValue.reppass} />
                        <input type="text" placeholder='image' name='image'
                            onChange={handleChange} value={formValue.image} />
                        <button>Register</button>
                    </form>
                    <div className='formLink'>If You Have Account <Link to='/login'>Login</Link></div>
                </div>
            </section>
        </>
    )
}
