import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginValidation } from './loginValidation';
import { crendenUserErrorApi, loginUserApi } from '../../redux/actions/actionsUser';
import { crendenUserError } from '../../redux/actions/actionsDispatch';
import { ErrorBox } from '../error-box/ErrorBox';

export const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.users.error);

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormValue((oldValue) => ({
            ...oldValue,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const error = loginValidation(formValue);

        if (Object.values(error).length === 0) {
         
            dispatch(loginUserApi(formValue, navigate));
        } else {
            const formError = "Write the empty fields."
            dispatch(crendenUserErrorApi(formError));
        }


    }

    return (
        <>


            {error && <ErrorBox error={error} />}

            <section className='formPage'>
                <div className='formWrapper'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='email' name='email'
                            onChange={handleChange} value={formValue.email} />
                        <input type="password" placeholder='password' name='password'
                            onChange={handleChange} value={formValue.password} />
                        <button>Login</button>
                    </form>
                    <div className='formLink'>If You Don't Have Account <Link to='/register'>Register</Link></div>
                </div>
            </section>
        </>
    )
}
