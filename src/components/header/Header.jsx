// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CallRequestButton from '../ui/popup/CallRequestButton'
import styles from './Header.module.scss'
import NavBar from './NavBar'

const Header = () => {
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
						<CallRequestButton title={'ПЕРЕЗВОНИТЬ МНЕ'} arrow={true} />
						<div className={styles.contactblok}>
							<img src='/static/telephone.svg' alt='telephoneIcon' />
							<p>+7(981)099-22-22</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
