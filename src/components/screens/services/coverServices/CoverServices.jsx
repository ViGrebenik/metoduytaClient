/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import ItemAdvantage from '../../../ui/itemAdvantage/ItemAdvantage'
import PortfolioCart from '../../../ui/portfolioCart/PortfolioCart'
import PortfolioItemContainer from '../../portfolio/portfolioScreen/portfolioItem/PortfolioItemContainer'
import styles from './CoverServices.module.scss'

const CoverServices = ({
	category,
	title,
	subtitle = '',
	portfolioPage = false,
	advantages,
	objectID = ['1', '2']
}) => {
	const location = useLocation()
	const currentPath = location.pathname
	return (
		<div className={styles.wrapperDesigner}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerBreadCrumbs}>
						<Breadcrumbs
							breadcrumbs={[
								{ name: 'Главная', url: '/' },
								{ name: category, url: currentPath }
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
								<PortfolioCart check={true} objectID={objectID[0]} />
							</div>
							<div className={styles.containerExamples}>
								<PortfolioCart check={true} objectID={objectID[1]} />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default CoverServices
