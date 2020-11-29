const postInitialState = []
const postReducer =(state = postInitialState , action)=>{
    switch(action.type){
        case 'SET_POST':{
            return [...action.payload]
        }
        case 'ADD_POST':{
            return [...action.payload]
        }
        default :{
            return [...state]
        }
    }
}
export default postReducer