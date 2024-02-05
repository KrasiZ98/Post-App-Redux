import { addPost, createUser, crendenUserError, crendenUserSuccess, deleteUser, loginUser, logoutUser, updateUser } from "./actionsDispatch";

export const createUsersApi = (user, navigate) => (dispatch) => {
    const registeredUsers = JSON.parse(localStorage.getItem("users"));
    if (registeredUsers !== null) {
        const existingEmail = registeredUsers.find((storageUser) => storageUser.email === user.email);
        if (existingEmail) {
            const error = "Email is alredy taken."
            dispatch(crendenUserErrorApi(error));
            return navigate('/register');
        }
        const existingUsername = registeredUsers.find((storageUser) => storageUser.username === user.username);
        if (existingUsername) {
            const error = "Username is alredy taken."
            dispatch(crendenUserErrorApi(error));
            return navigate('/register');
        }
    }

    const successMesg = `Login with user ${user.email} success.`;
    dispatch(crendenUserSuccessApi(successMesg));
    dispatch(createUser(user));
    navigate('/');
}

export const loginUserApi = (user, navigate) => (dispatch) => {
    const registeredUsers = JSON.parse(localStorage.getItem("users"));
    if (registeredUsers !== null) {



        const existingUser = registeredUsers.find((storageUser) => storageUser.email === user.email);

        if (existingUser !== undefined && existingUser.password === user.password) {
            const successMesg = `Login with user ${user.email} success.`;
            dispatch(loginUser(existingUser));
            dispatch(crendenUserSuccessApi(successMesg));
            navigate('/')
        } else {
            const error = "Email or Password don't match.";
            dispatch(crendenUserErrorApi(error));

        }
    } else {
        const error = "Email or Password don't match.";
        dispatch(crendenUserErrorApi(error));
    }
}

export const logoutUserApi = (navigate) => (dispatch) => {
    dispatch(logoutUser());
    navigate('/');
}

export const updateUserApi = (userId, user, navigate, message) => (dispatch) => {
    dispatch(updateUser(userId, user));
    dispatch(crendenUserSuccessApi(message));
    navigate('/profile');
}

export const deleteUserApi = (userId) => (dispatch) => {
    const choice = window.confirm("Are you sure you want to dele you account");
    if (choice) {
        dispatch(deleteUser(userId));
    } else {
        return;
    }
}


export const crendenUserErrorApi = (error) => (dispatch) => {
    dispatch(crendenUserError(error));
    setTimeout(() => {
        dispatch(crendenUserErrorApi(null));
    }, 5000);
}

export const crendenUserSuccessApi = (message) => (dispatch) => {
    dispatch(crendenUserSuccess(message));
    setTimeout(() => {
        dispatch(crendenUserSuccess(null));
    }, 5000);
}

export const addPostApi = (senderUser, recipientUserId, postMessage, successMesg) => (dispatch) => {
    dispatch(addPost(senderUser, recipientUserId, postMessage));
    dispatch(crendenUserSuccessApi(successMesg));
};




// export const CREATE_USER = "CREATE_USER";
// export const UPDATE_USER = "UPDATE_USER";
// export const DELETE_USER = "DELETE_USER";
// export const CREDENTIAL_USER_ERROR = "CREDENTIAL_USER_ERROR";
// export const CREDENTIAL_USER_SUCCESS = "CREDENTIAL_USER_SUCCESS";
