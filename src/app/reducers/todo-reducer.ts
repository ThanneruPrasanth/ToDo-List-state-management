import { TodoActionType } from "../shared/enum/todo-action-types.enum"; 
import { ActionParent } from "../actions/todo-action";
import { Todo } from "../models/todo";

const initialState: Todo[]=[
    {title:""}
    
];
export function TodoReducer(state = initialState,action:ActionParent){
    

    switch(action.type){
        case TodoActionType.Add:
            return[...state,action.payload];
            case TodoActionType.Remove:[...state.splice(action.payload,1)]
                return[...state];
        default:
            return state;
    }
}