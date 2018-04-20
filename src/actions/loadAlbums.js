export function loadAllAlbums(data){
    return {
        type: 'GET_ALL_ALBUMS',
        payload: data
    }
}