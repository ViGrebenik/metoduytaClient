/* eslint-disable react/prop-types */
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import ItemAdvantage from '../../../ui/itemAdvantage/ItemAdvantage'
import PortfolioCart from '../../../ui/portfolioCart/PortfolioCart'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import PortfolioItemContainer from '../../portfolio/portfolioScreen/portfolioItem/PortfolioItemContainer'
import styles from './CoverServices.module.scss'
import { advantages } from './dataAdvantage'

const CoverServices = ({ title, subtitle = '', portfolioPage = false }) => {
	return (
		<div className={styles.wrapperDesigner}>
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
						<div className={styles.contentHeaderTitle}>{title}</div>
						<div className={styles.contentHeaderSubtitle}>{subtitle}</div>
					</div>
					{!portfolioPage && (
						<div className={styles.containerAdvantages}>
							{advantages.map((service, index) => (
								<ItemAdvantage item={service} key={index} />
							))}
						</div>
					)}

					{portfolioPage && (
						<div className={styles.containerDescription}>
							<span>ПРИМЕРЫ РАБОТ</span>
							<img src='/static/arrowService.svg' alt='arrow' />
						</div>
					)}

					{portfolioPage ? (
						<>
							<PortfolioItemContainer />
						</>
					) : (
						<>
							<div className={styles.containerExamples}>
								<PortfolioCart check={true} />
							</div>
							<div className={styles.containerExamples}>
								<PortfolioCart check={true} />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default CoverServices
