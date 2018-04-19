export function getCurrentAlbum(data){
    return {
        type:'GET_CURRENT_ALBUM',
        payload: data
    }
}

export function clearDataAlbum(data){
    return {
        type:'CLEAR_DATA_WITH_CURRENT_ALBUM',
        payload: data
    }
}