// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import NavBar from './NavBar'
import Button from '../ui/button/Button'
import { useModal } from '../../assets/services/ModalContext'
import CallRequestForm from '../ui/popup/CallRequestForm'

const Header = () => {
	const { isModalOpen, closeModal } = useModal()
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<div className={styles.headerContainer}>
					<Link to={'/'} className={styles.logoContainer}>
						<img
							src='/static/lamp.svg'
							alt='Company Logo'
							className={styles.logo}
						/>
						<p className={styles.title}>
							МЕТОД
							<br />
							УЮТА
						</p>
					</Link>
					<NavBar />
					<div className={styles.containerContact}>
						<Button title={'ПЕРЕЗВОНИТЬ МНЕ'} arrow={true} type={'popUP'} />
						{/* <div className={styles.contactblok}>
							<img src='/static/telephone.svg' alt='telephoneIcon' />
							<p>+7(981)099-22-22</p>
						</div> */}
					</div>
				</div>
			</div>
			{isModalOpen && <CallRequestForm onClose={closeModal} />}
		</header>
	)
}

export default Header
