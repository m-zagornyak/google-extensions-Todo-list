import React from "react"
import { Todo } from "../todo"
import { Check } from "../TodoCheck/TodoCheck"

interface TodoItemProps {
	todo: Todo
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo: { title, isCompleted } }) => {
	return (
		<div>
			<Check isCompleted={isCompleted} />
			{title}
		</div>
	)
}