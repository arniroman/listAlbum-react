export default function getCurrentAlbum (state={} ,action){
    switch(action.type){
        case 'GET_CURRENT_ALBUM':
          return action.payload
        break
        case 'CLEAR_DATA_WITH_CURRENT_ALBUM':
          return action.payload
        default:
          return state
    }
}