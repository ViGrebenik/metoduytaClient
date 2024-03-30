import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, useLocation } from 'react-router-dom'
import { useModal } from '../../../assets/services/ModalContext'
import styles from './Navbar.module.scss'

const NavBar = () => {
	const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false)
	const [currentPage, setCurrentPage] = useState('')
	const { isOpen, setIsOpen } = useModal()
	const location = useLocation()
	const isMobile = useMediaQuery({ maxWidth: 726 })
	useEffect(() => {
		setCurrentPage(location.pathname)
	}, [location.pathname])

	const handleMouseEnter = () => {
		if (!isMobile) {
			setServicesDropdownOpen(true)
		}
	}

	const handleMouseLeave = () => {
		if (!isMobile) {
			setServicesDropdownOpen(false)
		}
	}

	return (
		<div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
			<ul>
				<li>
					<div className={styles.dropdown}>
						<div
							className={styles.dropdownToggle}
							onClick={() => setServicesDropdownOpen(!isServicesDropdownOpen)}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							УСЛУГИ
							<img
								className={`${isServicesDropdownOpen ? styles.arrow : ''}`}
								src='/static/arrowdown.svg'
								alt='arrow'
							/>
						</div>
						{isServicesDropdownOpen && (
							<ul
								className={styles.submenu}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<li>
									<Link
										to={'/servicesComplex'}
										onClick={() => setIsOpen(false)}
										className={
											currentPage === '/servicesComplex' ? styles.active : ''
										}
									>
										РЕМОНТ ПОД КЛЮЧ
									</Link>
								</li>
								<li>
									<Link
										to={'/servicesComplex'}
										onClick={() => setIsOpen(false)}
										className={
											currentPage === '/servicesComple' ? styles.active : ''
										}
									>
										РЕМОНТ В НОВОСТРОЙКЕ
									</Link>
								</li>
								<li>
									<Link
										to={'/servicesDesigner'}
										onClick={() => setIsOpen(false)}
										className={
											currentPage === '/servicesDesigner' ? styles.active : ''
										}
									>
										КОСМЕТИЧЕСКИЙ РЕМОНТ
									</Link>
								</li>
								<li>
									<Link
										to={'/servicesDesigner'}
										onClick={() => setIsOpen(false)}
										className={
											currentPage === '/servicesDesigne' ? styles.active : ''
										}
									>
										ДИЗАЙНЕРСКИЙ РЕМОНТ
									</Link>
								</li>
							</ul>
						)}
					</div>
				</li>
				<li>
					<Link
						to={'/portfolio'}
						className={currentPage === '/portfolio' ? styles.active : ''}
						onClick={() => setIsOpen(false)}
					>
						ПРИМЕРЫ РАБОТ
					</Link>
				</li>
				{/* <li>
					<Link
						to={'/payment'}
						className={currentPage === '/payment' ? styles.active : ''}
						onClick={() => setIsOpen(false)}
					>
						ЦЕНА
					</Link>
				</li> */}
				<li>
					<Link
						to={'/calculator'}
						className={currentPage === '/calculator' ? styles.active : ''}
						onClick={() => setIsOpen(false)}
					>
						КАЛЬКУЛЯТОР
					</Link>
				</li>
				<li>
					<Link
						to={'/aboutUs'}
						onClick={() => setIsOpen(false)}
						className={currentPage === '/aboutUs' ? styles.active : ''}
					>
						О КОМПАНИИ
					</Link>
				</li>
				<li>
					<Link
						to={'/contacts'}
						onClick={() => setIsOpen(false)}
						className={currentPage === '/contacts' ? styles.active : ''}
					>
						КОНТАКТЫ
					</Link>
				</li>
			</ul>
			{isMobile && (
				<div className={styles.socialLinkMobileHeader}>
					<div className={styles.container}>
						<div className={styles.containerNumber}>
							<div className={styles.number}>+7 981 944 67 49</div>
							<div className={styles.description}>с 9:00 до 22:00 (Пн-Вс)</div>
						</div>
						<div className={styles.socialLink}>
							<div className={styles.container}>
								<img
									src='/static/socialLink/telegramV3.svg'
									alt='intagramSocialLink'
								/>
							</div>
							<div className={styles.container}>
								<img src='/static/socialLink/vk.svg' alt='intagramSocialLink' />
							</div>
							<div className={styles.container}>
								<img
									src='/static/socialLink/whatsapp.svg'
									alt='intagramSocialLink'
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default NavBar
