import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const NavBar = () => {
	const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false)

	useEffect(() => {
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
	}, [])

	const handleDropdownToggleHover = () => {
		setServicesDropdownOpen(true)
	}

	const handleDropdownToggleLeave = () => {
		setServicesDropdownOpen(false)
	}

	return (
		<div className={styles.menu}>
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
									<Link to={'/servicesDesigner'}>УСЛУГИ ДИЗАНЕРА</Link>
								</li>
								<li>
									<Link to={'/servicesComplex'}>РЕМОНТ ПОД КЛЮЧ</Link>
								</li>
								<li>
									<Link to={'/servicesDesigner'}>ДИЗАЙНЕРСКИЙ РЕМОНТ</Link>
								</li>
								<li>
									<Link to={'/servicesComplex'}>КОСМЕТИЧЕСКИЙ РЕМОНТ</Link>
								</li>
							</ul>
						)}
					</div>
				</li>
				<li>
					<Link to={'/portfolio'}>ПРИМЕРЫ РАБОТ</Link>
				</li>
				<li>
					<Link to={'/payment'}>ЦЕНА</Link>
				</li>
				<li>
					<Link to={'/calculator'}>КАЛЬКУЛЯТОР</Link>
				</li>{' '}
				<li>
					<Link to={'/calculator'}>БЛОГ</Link>
				</li>
				<li>
					<Link to={'/aboutUs'}>О КОМПАНИИ</Link>
				</li>
				<li>
					<Link to={'/contacts'}>КОНТАКТЫ</Link>
				</li>
			</ul>
		</div>
	)
}

export default NavBar
