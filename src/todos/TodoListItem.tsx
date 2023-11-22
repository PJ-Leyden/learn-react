import * as React from "react";
import styles from "./TodoListItem.module.css";

export interface ITodoListItemProps {
	todo: string;
}

const TodoListItem: React.FC<ITodoListItemProps> = (props) => {
	return (
		<div className={styles.todoItemContainer}>
			<h3>{props.todo}</h3>
			<div className={styles.buttonContainer}>
				<button className={styles.completedButton}>
					Mark as Completed
				</button>
				<button className={styles.removeButton}>Remove</button>
			</div>
		</div>
	);
};

export default TodoListItem;
