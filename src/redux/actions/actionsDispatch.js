import { ADD_POST, CREATE_USERS, CREDENTIAL_USER_ERROR, CREDENTIAL_USER_SUCCESS, DELETE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "./actionsTypes";

export const createUser = (user) => (dispatch) => {
    dispatch({
        type: CREATE_USERS,
        payload: user,
    });
}

export const loginUser = (user) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: user,
    });
}

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: LOGOUT_USER,
    });
};

export const updateUser = (userId, user) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: { userId, user },
    });
}

export const deleteUser = (userId) => (dispatch) => {
    dispatch({
        type: DELETE_USER,
        payload: { userId: userId },
    });
}


export const crendenUserError = (error) => (dispatch) => {
    dispatch({
        type: CREDENTIAL_USER_ERROR,
        payload: error,
    });
}

export const crendenUserSuccess = (message) => (dispatch) => {
    dispatch({
        type: CREDENTIAL_USER_SUCCESS,
        payload: message,
    });
}

export const addPost = (senderUser, recipientUserId, post) => (dispatch) => {
    dispatch({
        type: ADD_POST,
        payload: { senderUser, recipientUserId, post },
    });
}