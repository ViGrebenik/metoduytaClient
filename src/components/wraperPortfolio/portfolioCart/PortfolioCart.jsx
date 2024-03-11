import SliderMain from '../sliderMain/SliderMain'
import styles from './PortfolioCart.module.scss'

const PortfolioCart = () => {
	return (
		<>
			<div className={styles.mainItemBlockSlider}>
				<SliderMain />
			</div>
			<div className={styles.mainItemContent}>
				<div className={styles.contentItemTitle}>
					<div className={styles.titleService}>КАПИТАЛЬНЫЙ РЕМОНТ</div>
					<div className={styles.titleCheck}>
						<img
							src='/public/static/slider/geolocated.svg'
							alt='geolocatedIcon'
						/>
						Ул.Cавушкина 12к3
					</div>
				</div>
				<div className={styles.contentItemSubtitle}>
					<div className={styles.subtitleQuadrature}>74 м²</div>
					<div className={styles.subtitleAddress}>710 000 т.р</div>
				</div>
			</div>
		</>
	)
}

export default PortfolioCart
