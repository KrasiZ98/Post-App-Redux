import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserApi } from '../../redux/actions/actionsUser';
import { Link } from 'react-router-dom';
import { InfoBox } from '../info-box/InfoBox';

export const Profile = () => {
    const user = useSelector((state) => state.users.user);
    const successMesg = useSelector((state) => state.users.successMesg);
    const dispatch = useDispatch();
    
    return (
        <section className='profilePage'>
            {successMesg && <InfoBox info={successMesg} />}
            <div className="profile-container">
                <div className="profile-details">
                    {user.image !== "" ?
                        <img src={user.image} alt="User Image" />
                        : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="User Image" />}
                    <h2>{user.fName} {user.lName}</h2>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                    <Link to={`/edit/${user.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => dispatch(deleteUserApi(user.id))} >Delete</button>
                </div>



                {user.posts?.length > 0 &&
                    <>
                        <div className="received-posts">
                            <h3>Received Posts:</h3>
                            {user.posts.map((post, index) => (
                            <div className="post" key={index}>
                                <p><strong>Sender: </strong>{post.senderUser.fName} {post.senderUser.lName}</p>
                                <p>Post content goes here...</p>
                                <p>{post.postMessage}</p>
                            </div>
                            ))}
                        </div>

                        {/* <div className="response-section">
                            <h3>Respond to Post:</h3>
                            <textarea placeholder="Write your response here..."></textarea>
                            <button>Respond</button>
                        </div> */}
                    </>
                }
            </div>
        </section>
    )
}
