import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({user}) => {
    console.log(user.fName)
    return (
        <div className='card'>
            <div className='catalogImage'>
                <Link to={`/details/${user.id}`}>
                    {user.image === "" ? 
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="User Image" />
                    : 
                    <img src={user.image} alt="User Image" />}
                </Link>
            </div>

            <div className='catalogInfo'>
                <h3>Name: {user.fName} {user.lName}</h3>
                <h4>Email: {user.email}</h4>

                <p>Username:{user.username}</p>
            </div>
        </div>
    )
}
