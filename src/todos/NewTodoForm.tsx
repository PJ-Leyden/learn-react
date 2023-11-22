import * as React from "react";
import styles from "./NewTodoForm.module.css";

export interface INewTodoFormProps {}

const NewTodoForm: React.FC<INewTodoFormProps> = (props) => {
	const [inputValue, setInputValue] = React.useState("");

	return (
		<div className={styles.newTodoForm}>
			<input
				type="text"
				className={styles.newTodoInput}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Type new todo here..."
			/>
			<button className={styles.newTodoButton}>Create Todo</button>
		</div>
	);
};

export default NewTodoForm;
