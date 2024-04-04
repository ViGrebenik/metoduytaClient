import styles from './WrapperServices.module.scss'
import ServiceCard from './serviceCard/ServiceCard'

const WrapperServices = () => {
	return (
		<div className={styles.wrapperServices}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>
								Услуги по ремонту и дизайну квартир в СПб
							</div>
							<div className={styles.contentHeaderSubtitle}>
								Вы можете доверить помещение и проект любой сложности. Мы делаем
								ремонт предсказуемым, доступным и комфортным.
							</div>
							<img src='/static/arrowService.svg' alt='arrow' />
						</div>
					</div>
					<div className={styles.containerWrapper}>
						<div className={styles.containerItem}>
							<ServiceCard
								title='КОМПЛЕКСНЫЙ РЕМОНТ'
								description='Выполняем все виды работ, включая дизайн-проект!'
								price='От 9500 руб. м2'
								imageUrl='/static/stoke/item02.jpg'
								specialСondition='Сделаем базовый дизайн-проект!'
								serviceUrl='/servicesComplex'
							/>
							<ServiceCard
								title='РЕМОНТ КВАРТИР В НОВОСТРОЙКЕ'
								description='Для тех, кто недавно переехал в новое жилье и мечтает поскорее оформить свой уютный уголок'
								specialСondition='Сделаем базовый дизайн-проект!'
								price='От 7000 ₽/м2'
								imageUrl='/static/stoke/item03.jpg'
								serviceUrl='/servicesComplex'
							/>
							<ServiceCard
								title='ДИЗАЙНЕРСКИЙ РЕМОНТ'
								description='Изменить интерьер квартиры максимально быстро и с минимальными затратами – это реально.'
								specialСondition='Скидка на ремонт 10%!'
								price='От 800 руб. м2'
								imageUrl='/static/stoke/item01.jpg'
								serviceUrl='/servicesDesigner'
							/>
							<ServiceCard
								title='КОСМЕТИЧЕСКИЙ РЕМОНТ'
								description='ВЫПОЛНИМ ОБЬЕМ РАБОТ ПО ВАШЕЙ КВАРТИРЕ'
								specialСondition='Сделаем базовый дизайн-проект!'
								price='От 8000 ₽/м2'
								imageUrl='/static/stoke/item04.jpg'
								serviceUrl='/servicesComplex'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperServices
