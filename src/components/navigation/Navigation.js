import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/actionsDispatch';
import { logoutUserApi } from '../../redux/actions/actionsUser';

export const Navigation = () => {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(user);
    return (
        <header>
            <div className='logo'>
                <img src="https://i.pinimg.com/736x/86/c3/05/86c30529904c3a992eb7241299e5f3e5.jpg" alt="Logo site" />
                <Link to='/'>Home</Link>
            </div>

            <nav>
                <ul>
                    {user?.email ?
                        <>
                            <li>
                                <Link to='/catalog/users'>Users</Link>
                            </li>
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                            <li>
                                <Link onClick={() => dispatch(logoutUserApi(navigate))}>Logout</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to='/catalog/users'>Users</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login/Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}
