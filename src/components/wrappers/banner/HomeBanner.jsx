import SliderBanner from '../../slider/SliderBanner'
import CallRequestButton from '../../ui/popup/CallRequestButton'
import styles from './HomeBanner.module.scss'

const HomeBanner = () => {
	return (
		<div className={styles.homeBanner}>
			<div className={styles.bannerContainer}>
				<div className={styles.bannerInfo}>
					<div className={styles.infoTitle}>
						<h1>
							<span>
								РЕМОНТ И ОТДЕЛКА <br />
							</span>
							КВАРТИР ПОД КЛЮЧ
						</h1>
						<h2>
							Выполним качественный ремонт по четсной цене в срок блягодаря
							многолетнему опыту
						</h2>
						<div className={styles.bannerAdvantages}>
							<div className={styles.advantageItem}>
								<img src='../../../public/construction.svg' alt='fkk' />
								<div className={styles.advantageBlock}>
									<div className={styles.advantageDescriptionMain}>
										Бесплатный замер
									</div>
									<div className={styles.advantageDescription}>
										Встреча с инженером-сметчиком и замер помещения квартир
									</div>
								</div>
							</div>
							<div className={styles.advantageItem}>
								<img src='../../../public/construction.svg' alt='fkk' />
								<div className={styles.advantageBlock}>
									<div className={styles.advantageDescriptionMain}>
										Договор с фиксированной стоимостью
									</div>
									<div className={styles.advantageDescription}>
										Без скрытый платажей
									</div>
								</div>
							</div>
							<div className={styles.advantageItem}>
								<img src='../../../public/construction.svg' alt='fkk' />
								<div className={styles.advantageBlock}>
									<div className={styles.advantageDescriptionMain}>
										ГАРАНТИЯ ОТ 2 ЛЕТ
									</div>
									<div className={styles.advantageDescription}>
										Письменная гарантия от 2-х лет на все производимые виды
										работ
									</div>
								</div>
							</div>
						</div>
						<div className={styles.titleAction}>
							<CallRequestButton
								bgC={'#ffd622'}
								title={'ЗАКАЗАТЬ РАССЧЕТ СМЕТЫ'}
							/>
							<p>КОНСУЛЬТАЦИЯ/ВЫЕЗДА ЗАМЕРЩИКА</p>
						</div>
					</div>
					<SliderBanner
						slides={[
							'../../../public/archive/item01.jpg',
							'../../../public/archive/item02.jpg',
							'../../../public/archive/item03.jpg'
						]}
					/>
				</div>
			</div>
		</div>
	)
}

export default HomeBanner
