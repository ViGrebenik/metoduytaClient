/* eslint-disable react/no-unknown-property */
// import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { useModal } from '../../assets/services/ModalContext'
import Button from '../ui/button/Button'
import CallRequestForm from '../ui/popup/CallRequestForm'
import styles from './Header.module.scss'
import NavBar from './navigation/NavBar'

const Header = () => {
	const { isModalOpen, closeModal, isOpen, toggleMenu } = useModal()
	const isMobile = useMediaQuery({ maxWidth: 1024 })

	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<div className={styles.headerContainer}>
					{isMobile ? (
						<>
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
							<label htmlFor='toggle' className={styles.burgerMenuButton}>
								<input
									type='checkbox'
									id='toggle'
									checked={isOpen}
									onChange={toggleMenu}
								/>
								<span></span>
								<span></span>
								<span></span>
							</label>
						</>
					) : (
						<>
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
							</div>
						</>
					)}
				</div>
			</div>
			{isOpen && <NavBar />}
			{isModalOpen && <CallRequestForm onClose={closeModal} />}
		</header>
	)
}

export default Header
