export default function getCurrentPhoto (state = {} ,action){
    switch(action.type){
        case 'GET_CURRENT_PHOTO':
          return action.payload
        break
        case 'CLEAR_DATA_WITH_CURRENT_PHOTO':
          return action.payload
        default:
          return state
    }
}