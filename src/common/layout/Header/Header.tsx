import { GiHamburgerMenu } from "react-icons/gi";
import { ImCalendar } from "react-icons/im"
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header>
			<div className={styles.header}>
				<GiHamburgerMenu size={22} />
				<h3>To-Do list</h3>
				<ImCalendar size={22}/>
			</div>
		</header>
	)
}