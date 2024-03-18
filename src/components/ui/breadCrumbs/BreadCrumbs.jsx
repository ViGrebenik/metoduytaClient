/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'
import styles from './BreadCrumbs.module.scss'

const Breadcrumbs = ({ breadcrumbs }) => {
	const location = useLocation()
	const currentPath = location.pathname
	return (
		<div className={styles.containerBreadCrumbs}>
			{breadcrumbs.map((breadcrumb, index) => (
				<div key={index} className={styles.crumbs}>
					{index > 0 && (
						<>
							<img
								src='/static/advantage/arrowYellow.svg'
								alt='arrow'
								className={styles.separator}
							/>
						</>
					)}
					<Link
						to={breadcrumb.url}
						className={`${styles.breadcrumb} ${
							currentPath === breadcrumb.url ? styles.active : ''
						}`}
					>
						{breadcrumb.name}
					</Link>
				</div>
			))}
		</div>
	)
}

export default Breadcrumbs
