import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state: Array<any> = [], action: any) => {
    const {type, payload} = action;

    switch(type){
        case CREATE_TODO: {
            const {text} = payload;
            const newTodo = {
                text: text,
                isCompleted: false
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const {text} = payload;
            return state.filter(t => t.text !== text)
        }
        default:
            return state;
    }
}