export default function getCurrentAlbum (state = {} ,action){
    switch(action.type){
        case 'GET_CURRENT_ALBUM':
          return action.payload
        break
        default:
          return {...state}
    }
}