// const createSome = data => dispatch =>{
//         dispatch({
//             type:'add',
//             payload: 'haha'
//         })
// }

// export { createSome }

export function loadSometh(data){
    return {
        type: 'ADD_SOME',
        payload: data
    }
}