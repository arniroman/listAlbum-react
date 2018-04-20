export default function createSometh (state = {} ,action){
        switch(action.type){
            case 'GET_ALL_ALBUMS':
              return action.payload
            break
            default:
              return state
        }
}