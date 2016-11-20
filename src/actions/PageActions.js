/**
 * Created by Alejandro on 20.11.2016.
 */
import { SET_YEAR } from '../constants/Page';

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}