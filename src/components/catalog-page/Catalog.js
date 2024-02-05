import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from './Card';

export const Catalog = () => {
    const state = useSelector((state) => state.users);
    const registeredUsers = state.users?.filter((users) => users.id !== state.user?.id);



    return (
        <section className='catalogPage'>
            <div className='catalogWhrapper'>
                {registeredUsers.length > 0  ?
                    registeredUsers.map((user) => <Card key={user.id} user={user} />)
                    :  <h2>No Avelible Users</h2>}
            </div>
        </section>
    )
}
