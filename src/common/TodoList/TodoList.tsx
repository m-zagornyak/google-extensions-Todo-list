import React from 'react'
import { TodoItem } from './TodoItem'
import { todos, Todo } from './todo'
import styles from './TodoList.module.scss'

export interface TodoListProps {
	todos: Todo[]
}

export const TodoList: React.FC<TodoListProps> = () => {
	return (
		<div className={styles.list}>
			{todos.map(todo => (
					<TodoItem key={todo._id} todo={todo}/>
				))}
		</div>
	)
}