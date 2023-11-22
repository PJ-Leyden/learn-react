import * as React from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";
import NewTodoForm from "./NewTodoForm";

export interface ITodoListProps {
	todos: string[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
	return (
		<div className={styles.listWrapper}>
			<NewTodoForm />
			{props.todos.map((todo) => (
				<TodoListItem todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
