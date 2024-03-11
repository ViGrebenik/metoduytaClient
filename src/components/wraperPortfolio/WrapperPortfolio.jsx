import Button from '../ui/button/Button'
import styles from './WrapperPortfolio.module.scss'
import SliderMain from './sliderMain/SliderMain'

const WrapperPortfolio = () => {
	return (
		<div className={styles.wrapperPortfolio}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContent}>
							<div className={styles.contentHeaderTitle}>
								ЧАСТЬ ВЫПОЛНЕННЫХ РАБОТ
							</div>
							<div className={styles.contentHeaderSubtitle}>
								Хороший ремонт – это реальность.
							</div>
						</div>
						<Button
							title={'ПОСМОТРЕТЬ ВСЕ РАБОТЫ'}
							fontSize={'22px'}
							redirectTo={'/portfolio'}
						/>
					</div>
					<div className={styles.containerMain}>
						<div className={styles.containerMainItem}>
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
						<div className={styles.containerMainItem}>
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
						<div className={styles.containerMainItem}>
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
						<div className={styles.containerMainItem}>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperPortfolio
