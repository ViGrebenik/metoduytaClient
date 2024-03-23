import PortfolioCart from '../../../../wraperPortfolio/portfolioCart/PortfolioCart'
import styles from './PortfolioItem.module.scss'
import { mockData } from '../../../../wraperPortfolio/mocData'

const PortfolioItemContainer = () => {
	return (
		<div className={styles.containerMain}>
			{mockData.map((item, index) => (
				<div className={styles.containerMainItem} key={index}>
					<PortfolioCart portfolioPage={true} objectID={item.id} />
				</div>
			))}
		</div>
	)
}

export default PortfolioItemContainer
