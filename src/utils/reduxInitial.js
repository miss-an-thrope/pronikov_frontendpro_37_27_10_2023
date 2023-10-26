// Redux:
import {createStore} from 'redux';

// API:
import { fetchUsersData } from './api';

const users = await fetchUsersData();
const initialState = {
    users: users,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case 'setUsers':
            return{
                users: action.payload
            }
    }
    return state;
}
const store = createStore(usersReducer)

export default store; 