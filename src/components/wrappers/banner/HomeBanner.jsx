import { useMediaQuery } from 'react-responsive'
import SliderBanner from '../../slider/SliderBanner'
import Button from '../../ui/button/Button'
import Advantage from '../../ui/itemAdvantage/advantage/Advantage'
import styles from './HomeBanner.module.scss'
import { advantages } from './dataAdvantage'

const HomeBanner = () => {
	const isMobile = useMediaQuery({ maxWidth: 1024 })
	const isMobileLittle = useMediaQuery({ maxWidth: 724 })
	const fontSize = isMobileLittle ? '22px' : '21px'

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
						<div className={styles.bannerAdvantages}>
							{advantages.map((advantage, index) => (
								<Advantage advantage={advantage} key={index} />
							))}
							<div className={styles.titleAction}>
								<Button
									fontSize={fontSize}
									pd={'25px 20px'}
									type='popUp'
									title={'ЗАКАЗАТЬ РАССЧЕТ СМЕТЫ'}
								/>
								<p>
									КОНСУЛЬТАЦИЯ И <br />
									ВЫЕЗДА ЗАМЕРЩИКА
								</p>
							</div>
						</div>
					</div>
					{!isMobile && (
						<SliderBanner
							slides={[
								'/static/archive/item01.jpg',
								'/static/archive/item02.jpg',
								'/static/archive/item03.jpg'
							]}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default HomeBanner
