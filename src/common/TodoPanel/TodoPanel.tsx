import { useState } from "react"
import styles from "./TodoPanel.module.scss"

export const TodoPanel = () => {
	const [ userInput ] = useState('') 

	return (
		<form>
			<input 
				value={userInput}
				type="text"

			/>
		</form>
	)
}
