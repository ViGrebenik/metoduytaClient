/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from './BreadCrumbs.module.scss' // Подключаем стили из SCSS модуля

const Breadcrumbs = ({ breadcrumbs }) => {
	return (
		<div className={styles.containerBreadCrumbs}>
			{breadcrumbs.map((breadcrumb, index) => (
				<div key={index} className={styles.crumbs}>
					{index > 0 && (
						<>
							<img
								src='/static/arrow.svg'
								alt='arrow'
								className={styles.separator}
							/>
						</>
					)}
					<Link to={breadcrumb.url} className={styles.breadcrumb}>
						{breadcrumb.name}
					</Link>
				</div>
			))}
		</div>
	)
}

export default Breadcrumbs
