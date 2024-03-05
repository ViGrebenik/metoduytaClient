import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import styles from './PortfolioScreen.module.scss'
import PortfolioItem from './portfolioItem/PortfolioItem'
const PortfolioScreen = () => {
	return (
		<div className={styles.wrapperPortfolio}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerBreadCrumbs}>
						<Breadcrumbs
							breadcrumbs={[
								{ name: 'Главная', url: '/' },
								{ name: 'Категория', url: '/category' },
								{ name: 'Страница', url: '/page' }
							]}
						/>
					</div>
					<div className={styles.containerHeader}>
						<div className={styles.contentHeaderTitle}>ПРИМЕРЫ РАБОТ</div>
					</div>
					<PortfolioItem />
					<WrapperReviews />
					<WrapperServices />
				</div>
			</div>
		</div>
	)
}

export default PortfolioScreen
