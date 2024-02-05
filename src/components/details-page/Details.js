import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addPostApi } from '../../redux/actions/actionsUser';
import { InfoBox } from '../info-box/InfoBox';

export const Details = () => {

    const { id: profileId } = useParams();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.users.user);
    const users = useSelector((state) => state.users.users);
    const message = useSelector((state) => state.users.successMesg);

    const currentUser = users.find((user) => user.id === profileId);
    const [postContent, setPostContent] = useState('');

    const handlePost = () => {
        if (postContent === '') {
            alert('You cannot send empty message.');
        } else {
            const successMesg = `You success send message to user ${currentUser.fName} ${currentUser.lName}`
            dispatch(addPostApi(user, profileId, postContent, successMesg));
            setPostContent('');
        }
    };

    return (
        <>
            {message && <InfoBox info={message} />}
            <section className='detailsPage'>
                <div className="user-details">
                    {currentUser.image === "" ?
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="User Image" />
                        :
                        <img src={currentUser.image} alt="User Image" />
                    }
                    <h2>{currentUser.fName} {currentUser.lName}</h2>
                    <p>Email: {currentUser.email}</p>
                    <p>Username: {currentUser.username}</p>
                </div>

                {user.email &&
                    <div className="post-section">
                        <textarea placeholder="Write your post here..."
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}></textarea>
                        <button onClick={handlePost} >Post</button>
                    </div>
                }
            </section>
        </>
    )
}
