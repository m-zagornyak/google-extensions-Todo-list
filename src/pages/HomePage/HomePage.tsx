import React from 'react'
import { Header } from "../../common"
import { TodoList } from "../../common/TodoList/TodoList"
import { todos } from "../../common/TodoList/todo"

export const HomePage = () => {
	return (
		<div>
			<Header />
			<TodoList todos={todos} />
		</div>
	)
}