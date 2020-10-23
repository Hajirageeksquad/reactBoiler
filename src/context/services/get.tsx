import { getApiUrI } from '../../config';
export const getService = function (dispatch:any) {
    fetch(getApiUrI)
    .then(response => response.json())
     .then(data => 
         dispatch({
                type: 'GET_DATA',
                payload: data
            })
     )
};