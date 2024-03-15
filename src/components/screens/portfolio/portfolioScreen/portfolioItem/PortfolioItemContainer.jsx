import PortfolioCart from '../../../../wraperPortfolio/portfolioCart/PortfolioCart'
import styles from './PortfolioItem.module.scss'

const PortfolioItemContainer = () => {
	const items = Array(12).fill('')
	return (
		<div className={styles.containerMain}>
			{items.map((_, index) => (
				<div className={styles.containerMainItem} key={index}>
					<PortfolioCart portfolioPage={true} />
				</div>
			))}
		</div>
	)
}

export default PortfolioItemContainer
