export default function getCurrentPhoto (state = {} ,action){
    switch(action.type){
        case 'GET_CURRENT_PHOTO':
          return action.payload
        break
        default:
          return {...state}
    }
}