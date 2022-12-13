import { BsCheck } from "react-icons/bs"
import styles from "./TodoCheck.module.scss"

interface TodoCheckProps {
	isCompleted: boolean
}

export const Check: React.FC<TodoCheckProps> = ({  isCompleted  }) => {
	return (
		<div className={styles.check}>
			{isCompleted &&
				<BsCheck size="24" className={styles.check_options} />
			}	
		</div>
	)
}

