import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useModal } from '../../../assets/services/ModalContext'
import styles from './Navbar.module.scss'

const NavBar = () => {
	const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false)
	const [currentPage, setCurrentPage] = useState('')
	const { isOpen, toggleMenu } = useModal()
	const location = useLocation()
	useEffect(() => {
		setCurrentPage(location.pathname)
		const handleOutsideClick = event => {
			if (
				event.target.closest('.dropdown') === null ||
				event.target.closest('.submenu') !== null
			) {
				return
			}
			setServicesDropdownOpen(false)
		}

		window.addEventListener('click', handleOutsideClick)

		return () => {
			window.removeEventListener('click', handleOutsideClick)
		}
	}, [location.pathname])

	const handleDropdownToggleHover = () => {
		setServicesDropdownOpen(true)
	}

	const handleDropdownToggleLeave = () => {
		setServicesDropdownOpen(false)
	}

	return (
		<div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
			<ul>
				<li>
					<div
						className={styles.dropdown}
						onMouseEnter={handleDropdownToggleHover}
						onMouseLeave={handleDropdownToggleLeave}
					>
						<div
							className={styles.dropdownToggle}
							onClick={() => setServicesDropdownOpen(!isServicesDropdownOpen)}
						>
							УСЛУГИ
						</div>
						{isServicesDropdownOpen && (
							<ul className={styles.submenu}>
								<li>
									<Link
										to={'/servicesDesigner'}
										className={
											currentPage === '/servicesDesigner' ? styles.active : ''
										}
									>
										УСЛУГИ ДИЗАНЕРА
									</Link>
								</li>
								<li>
									<Link
										to={'/servicesComplex'}
										className={
											currentPage === '/servicesComplex' ? styles.active : ''
										}
									>
										РЕМОНТ ПОД КЛЮЧ
									</Link>
								</li>
								<li>
									<Link
										to={'/servicesDesigner'}
										className={
											currentPage === '/servicesDesigne' ? styles.active : ''
										}
									>
										ДИЗАЙНЕРСКИЙ РЕМОНТ
									</Link>
								</li>
								<li>
									<Link
										to={'/servicesComplex'}
										className={
											currentPage === '/servicesComple' ? styles.active : ''
										}
									>
										КОСМЕТИЧЕСКИЙ РЕМОНТ
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
						onClick={toggleMenu}
					>
						ПРИМЕРЫ РАБОТ
					</Link>
				</li>
				<li>
					<Link
						to={'/payment'}
						className={currentPage === '/payment' ? styles.active : ''}
					>
						ЦЕНА
					</Link>
				</li>
				<li>
					<Link
						to={'/calculator'}
						className={currentPage === '/calculator' ? styles.active : ''}
					>
						КАЛЬКУЛЯТОР
					</Link>
				</li>{' '}
				{/* <li>
					<Link
						to={'/blog'}
						className={currentPage === '/blog' ? styles.active : ''}
					>
						БЛОГ
					</Link>
				</li> */}
				<li>
					<Link
						to={'/aboutUs'}
						className={currentPage === '/aboutUs' ? styles.active : ''}
					>
						О КОМПАНИИ
					</Link>
				</li>
				<li>
					<Link
						to={'/contacts'}
						className={currentPage === '/contacts' ? styles.active : ''}
					>
						КОНТАКТЫ
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default NavBar
