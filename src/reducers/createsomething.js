export default function createSometh (state = null ,action){
        switch(action.type){
            case 'ADD_SOME':
              return action.payload
            break
            default:
              return state
        }
}