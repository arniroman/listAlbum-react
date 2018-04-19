export function loadCurrentPhotoById (data){
    return {
        type: 'GET_CURRENT_PHOTO',
        payload: data
    }
}