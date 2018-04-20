export function loadCurrentPhotoById (data){
    return {
        type: 'GET_CURRENT_PHOTO',
        payload: data
    }
}

export function clearPhotoData(data){
    return {
        type:'CLEAR_DATA_WITH_CURRENT_PHOTO',
        payload: data
    }
}