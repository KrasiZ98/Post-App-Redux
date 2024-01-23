import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { InfoBox } from '../info-box/InfoBox';

export const Home = () => {
    const user = useSelector((state) => state.users.user);
    const successMesg = useSelector((state) => state.users.successMesg);
    return (
        <>
            {successMesg && <InfoBox info={successMesg} />}
            <section className='homePage'>
                <div className='homeInfo'>
                    {user.email ? (
                        // If there is a logged-in user
                        <div className='info'>
                            <h3>Welcome, {user.fName}!</h3>

                            <h3>If you want to see the registered and make post users, go to the <Link to='/catalog/users'>Catalog</Link>.</h3>

                        </div>
                    ) : (
                        // If there is no logged-in user
                        <div className='info'>
                            <h3>You don't have an account yet.</h3>
                            <h3>If you want to send a post, please <Link to='/login'>Login</Link>.</h3>
                            <h3>If you want to see the registered users, go to the <Link to='/catalog/users'>Catalog</Link>.</h3>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
