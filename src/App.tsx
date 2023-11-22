import * as React from "react";
import styles from "./App.module.css";
import TodoList from "./todos/TodoList";

const App: React.FC<{}> = (props) => {
	return (
		<div className={styles.App}>
			<TodoList todos={["Item"]} />
		</div>
	);
};

export default App;
