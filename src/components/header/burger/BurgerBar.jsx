/* eslint-disable react/prop-types */
import { useModal } from '../../../assets/services/ModalContext'
import NavBar from '../navigation/NavBar'
import styles from './BurgerBar.module.scss'

const BurgerBar = () => {
	const { isOpen, toggleMenu } = useModal()
	return (
		<div className={styles.burgerMenu}>
			<div
				className={`${styles.menuBackdrop} ${isOpen ? styles.open : ''}`}
				onClick={toggleMenu}
			>
				<div className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}>
					<NavBar />
				</div>
			</div>
		</div>
	)
}

export default BurgerBar
