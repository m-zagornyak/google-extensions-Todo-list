import { GiHamburgerMenu } from "react-icons/gi";
import { ImCalendar } from "react-icons/im"
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header>
			<div className={styles.header_container}>
				<div className={styles.header}>
					<ul>
						<li>
							<GiHamburgerMenu />
						</li>
						<li>
							<h3>To-Do Lisst</h3>
						</li>
						<li>
							<ImCalendar />
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}