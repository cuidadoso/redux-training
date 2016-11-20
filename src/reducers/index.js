/**
 * Created by Alejandro on 20.11.2016.
 */
import { combineReducers } from 'redux';
import page from './page';
import user from './user';

export default combineReducers({
    page,
    user
})