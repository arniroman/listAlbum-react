export function getCurrentAlbum(data){
    return {
        type:'GET_CURRENT_ALBUM',
        payload: data
    }
}