import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

const todosSlice = createSlice({
	name: "todos",
	initialState: [] as Todo[],
	reducers: {
		todoAdded(state, action: PayloadAction<Todo>) {
			state.push({
				id: action.payload.id,
				text: action.payload.text,
				completed: false,
			});
		},
		todoToggled(state, action: PayloadAction<Todo>) {
			const todo = state.find((todo) => todo.id === action.payload.id);
			todo.completed = !todo.completed;
		},
	},
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
