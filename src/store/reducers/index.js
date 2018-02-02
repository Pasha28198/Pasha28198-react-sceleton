import {combineReducers} from 'redux';
// import { reducer as formReducer } from 'react-form';
import authReducer from './auth';

const rootReducer = combineReducers({
    auth: authReducer,
    // form: formReducer
});

export default rootReducer;