import SliderMain from '../../../../wraperPortfolio/sliderMain/SliderMain'
import styles from './PortfolioItem.module.scss'

const PortfolioItemContainer = () => {
	const items = Array(12).fill('')
	return (
		<div className={styles.containerMain}>
			{items.map((_, index) => (
				<div className={styles.containerMainItem} key={index}>
					<div className={styles.mainItemBlockSlider}>
						<SliderMain />
					</div>
					<div className={styles.mainItemContent}>
						<div className={styles.contentItemTitle}>
							<div className={styles.titleService}>КАПИТАЛЬНЫЙ РЕМОНТ</div>
							<div className={styles.titleCheck}>СТОИМОСТЬ</div>
						</div>
						<div className={styles.contentItemSubtitle}>
							<div className={styles.subtitleAddress}>АДРЕСС</div>
							<div className={styles.subtitleQuadrature}>ХХ М2</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default PortfolioItemContainer
