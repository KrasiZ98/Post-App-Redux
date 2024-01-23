import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { crendenUserErrorApi, updateUserApi } from '../../redux/actions/actionsUser';
import { registerValidation } from '../register-page/registerValidation';

export const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.users.error);
    const user = useSelector((state) => state.users.user);

    const [formValue, setFormValue] = useState({
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        username: user.username,
        password: user.password,
        reppass: user.reppass,
        image: user.image,
        posts: user.posts,
        id: user.id,
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
            const message = "Update Success."
            dispatch(updateUserApi(user.id, formValue, navigate, message));
        } else {
            dispatch(crendenUserErrorApi(errors));
        }
    };
    return (
        <section className='formPage'>
            <div className='formWrapper'>
                <h1>Edit User</h1>
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
                    <button>Edit</button>
                </form>

            </div>
        </section>
    )
}
